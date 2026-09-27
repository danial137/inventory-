"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
const getUser = async (req, res) => {
    try {
        const user = await prisma.users.findMany();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Error " });
    }
};
exports.getUser = getUser;
