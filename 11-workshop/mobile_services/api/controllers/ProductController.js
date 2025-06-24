const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient();

module.exports = {
    ProductController: {
        createProduct: async (req, res) => {
            try {
                const product = await prisma.product.create({
                    data: {
                        serialNumber: req.body.serialNumber,
                        itemName: req.body.itemName,
                        itemPrice: req.body.itemPrice,
                        itemModel: req.body.itemModel,
                        itemColor: req.body.itemColor,
                        customerName: req.body.customerName,
                        customerPhone: req.body.customerPhone,
                        customerAddress: req.body.customerAddress,
                        remarks: req.body.remarks ?? '',
                    }
                });
                // res.status(201).json(product);
                res.json({
                    message: 'Product created successfully',
                    product: product
                });
            } catch (error) {
                // res.status(500).json({ message: error.message });
                res.status(500).json({
                    message: 'Error creating product',
                    error: error.message
                });
            }
        },

    }
}