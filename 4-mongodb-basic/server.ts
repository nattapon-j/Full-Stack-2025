// npm i body-parser
// npm i dotenv
// npm i typescript ts-node @types/node --save-dev  
// npm i prisma --save-dev 
// npx prisma init --datasource-provider mongodb
// npx prisma generate

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = 3000;

// const { PrismaClient } = require('@prisma/client');
const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient();

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/check-db-connection', async (req, res) => {
    try {
        await prisma.$connect();
        res.send({ message: 'Database connection successful' });
    } catch (error) {
        res.status(500).send({ message: 'Database connection failed', error });
    }
}
);

app.post('/customer/create', async (req, res) => {
    try {
        const payload = req.body;
        const customer = await prisma.customer.create({
            data: payload
        });
        res.json(customer);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/list', async (req, res) => {
    try {
        const customers = await prisma.customer.findMany();
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/detail/:id', async (req, res) => {
    try {
        const customer = await prisma.customer.findUnique({
            where: {
                id: req.params.id
            }
        });
        res.json(customer);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.put('/customer/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const customer = await prisma.customer.update({
            where: {
                id: id
            },
            data: payload
        });
        res.json(customer);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.delete('/customer/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await prisma.customer.delete({
            where: {
                id: id
            }
        });
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/startsWith', async (req, res) => {
    try {
        const keyword = req.body.keyword;
        const customers = await prisma.customer.findMany({
            where: {
                name: {
                    startsWith: keyword
                }
            }
        });
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/endsWith', async (req, res) => {
    try {
        const keyword = req.body.keyword;
        const customers = await prisma.customer.findMany({
            where: {
                name: {
                    endsWith: keyword
                }
            }
        });
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// This endpoint is used to find customers whose names contain a specific keyword
app.get('/customer/contains', async (req, res) => {
    try {
        const keyword = req.body.keyword;
        const customers = await prisma.customer.findMany({
            where: {
                name: {
                    contains: keyword // LIKE '%keyword%' 
                }
            }
        });
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/sortByName', async (req, res) => {
    try {
        const customers = await prisma.customer.findMany({
            orderBy: {
                name: 'asc' // Sort by name in ascending order
            }
        });
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/whereAnd', async (req, res) => {
    try {
        const customers = await prisma.customer.findMany({
            where: {
                AND: [
                    { name: { contains: 'a' } },
                    { credit: { gte: 0 } }
                ]
            }
        });
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/listBetweenCredit', async (req, res) => {
    try {
        const customers = await prisma.customer.findMany({
            where: {
                credit: {
                    gte: 150000, // Greater than or equal to 150000
                    lte: 500000 // Less than or equal to 500000
                }
            }
        });
        res.json(customers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/sumCredit', async (req, res) => {
    try {
        const sumCredit = await prisma.customer.aggregate({
            _sum: {
                credit: true // Sum of the credit field
            }
        });
        res.json({ sumCredit: sumCredit._sum.credit });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/maxCredit', async (req, res) => {
    try {
        const maxCredit = await prisma.customer.aggregate({
            _max: {
                credit: true // Maximum value of the credit field
            }
        });
        res.json({ maxCredit: maxCredit._max.credit });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/minCredit', async (req, res) => {
    try {
        const minCredit = await prisma.customer.aggregate({
            _min: {
                credit: true // Minimum value of the credit field
            }
        });
        res.json({ minCredit: minCredit._min.credit });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/avgCredit', async (req, res) => {
    try {
        const avgCredit = await prisma.customer.aggregate({
            _avg: {
                credit: true // Average value of the credit field
            }
        });
        res.json({ avgCredit: avgCredit._avg.credit });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/countCustomer', async (req, res) => {
    try {
        const count = await prisma.customer.count();
        res.json({ countCustomer: count });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.post('/order/create', async (req, res) => {
    try {
        const customerId = req.body.customerId;
        const amount = req.body.amount;
        const order = await prisma.order.create({
            data: {
                customerId: customerId,
                amount: amount
            }
        });
        res.json(order);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/listOrders/:customerId', async (req, res) => {
    try {
        const customerId = req.params.customerId;
        const orders = await prisma.order.findMany({
            where: {
                customerId: customerId
            }
        });
        res.json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/listAllOrders', async (req, res) => {
    try {
        const orders = await prisma.customer.findMany({
            include: {
                Order: true // Include the related orders
            }
        });
        res.json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/customer/listOrdersAndProduct/:customerId', async (req, res) => {
    try {
        const customerId = req.params.customerId;
        const customer = await prisma.customer.findMany({
            where: { id: customerId },
            include: {
                Order: {
                    include: {
                        Product: true // Include the related product
                    }
                }
            }
        });
        res.json(customer);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Prisma Client is a type-safe database client generated by Prisma
// Prisma Client is auto-generated and can be used to perform database operations
// Prisma Client is generated based on the Prisma schema