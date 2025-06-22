const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient();

module.exports = {
    CompanyController: {
        createCompany: async (req, res) => {
            try {
                // const { name, address, phone, email, website, taxId } = req.body;
                const existingCompany = await prisma.company.findFirst();

                const payload = {
                    name: req.body.name,
                    email: req.body.email ?? '',
                    // website: req.body.website,
                    taxId: req.body.taxId,
                    address: req.body.address,
                    phone: req.body.phone
                }

                if (existingCompany) {
                    await prisma.company.update({
                        where: { id: existingCompany.id },
                        data: payload
                    });
                } else {
                    const company = await prisma.company.create({
                        data: payload
                    });
                }

                res.status(201).json({
                    message: 'Company created successfully',
                    company: company
                });
            } catch (error) {
                // res.status(500).json({ message: error.message });
                res.status(500).json({
                    message: 'Error creating company',
                    error: error.message
                });
            }
        },
        list: async (req, res) => {
            try {
                const company = await prisma.company.findFirst();
                res.status(200).json(company);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        }

        // getCompanies: async (req, res) => {
        //     try {
        //         const companies = await prisma.companies.findMany();
        //         res.status(200).json(companies);
        //     } catch (error) {
        //         res.status(500).json({ message: error.message });
        //     }
        // }
    }
};