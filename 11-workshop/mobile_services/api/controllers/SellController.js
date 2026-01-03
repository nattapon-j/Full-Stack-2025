const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

module.exports = {
    SellController: {
        create: async (req, res) => {
            try {
                const serial = req.body.serial;
                const product = await prisma.product.findFirst({
                    where: {
                        serialNumber: serial
                        // status: "active"
                    }
                });
                if (!product) {
                    return res.status(400).json({ message: 'Product not found' });
                }

                await prisma.sells.create({
                    data: {
                        productId: product.id,
                        price: req.body.price,
                        payDate: new Date()
                    }
                });
                res.json({ message: 'Sell created successfully' });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        }
    }
};