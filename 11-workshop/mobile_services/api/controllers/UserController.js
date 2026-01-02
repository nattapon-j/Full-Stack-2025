// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require('../generated/prisma')

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const prisma = new PrismaClient();

module.exports = {
    UserController: {
        signIn: async (req, res) => {
            try {
                const username = req.body.username;
                const password = req.body.password;

                const user = await prisma.users.findFirst({
                    where: {
                        username: username,
                        password: password,
                        status: "active"
                    }
                });

                if (!user) {
                    return res.status(401).json({ message: 'Invalid username or password' });
                }

                const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.status(200).json({
                    message: 'Sign in successful',
                    token: token,
                });

            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },
        getProfile: async (req, res) => {
            try {
                const headers = req.headers.authorization;
                const token = headers.split(" ")[1];
                const decoded = jwt.verify(token, process.env.SECRET_KEY);

                const user = await prisma.users.findFirst({
                    where: {
                        id: decoded.userId
                    },
                    select: {
                        name: true,
                        level: true,
                    }
                });
                res.json(user);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        }
    }
}
