const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient();

module.exports = {
    ProductController: {
        createProduct: async (req, res) => {
            try {
                const qty = req.body.qty ?? 1; // Default to 1 if qty is not provided
                console.log('Creating product with quantity:', qty);
                if (qty > 1000) {
                    res.status(400).json({
                        error: 'Quantity cannot exceed 1000'
                    });
                    return;
                }
                for (let i = 0; i < qty; i++) {
                    // console.log(`Creating product ${i + 1} of ${qty}`);
                    const product = await prisma.product.create({
                        data: {
                            serialNumber: req.body.serialNumber ?? '',
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
                    // console.log(`Product ${i + 1} created:`, product);
                }
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
        listProduct: async (req, res) => {
            try {
                const products = await prisma.product.findMany({
                    orderBy: {
                        id: 'desc'
                    },
                    where: {
                        status: {
                            not: 'deleted' // Exclude deleted products
                        }
                    }
                });
                res.json(products);
            } catch (error) {
                res.status(500).json({
                    message: 'Error fetching products',
                    error: error.message
                });
            }
        },

        updateProduct: async (req, res) => {
            const { id } = req.params; // Extracting id from req.params
            try {
                const product = await prisma.product.update({
                    where: { id: id },
                    // where: { id: req.params.id },
                    // data: req.body, // Assuming req.body contains the updated product data
                    data: {
                        serialNumber: req.body.serialNumber ?? '',
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
                res.json({
                    message: 'Product updated successfully',
                    product: product
                });
            } catch (error) {
                res.status(500).json({
                    message: 'Error updating product',
                    error: error.message
                });
            }
        },

        deleteProduct: async (req, res) => {
            const { id } = req.params; // Extracting id from req.params
            try {
                // await prisma.product.delete({
                //     where: { id: id },
                // });
                await prisma.product.update({
                    where: { id: id },
                    data: {
                        status: 'deleted' // Soft delete
                    }
                });
                res.json({
                    message: 'Product deleted successfully'
                });
            } catch (error) {
                res.status(500).json({
                    message: 'Error deleting product',
                    error: error.message
                });
            }
        }
    }
}