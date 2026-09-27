"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpensByCategory = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
const getExpensByCategory = async (req, res) => {
    try {
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            orderBy: {
                date: "desc",
            },
        });
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => ({
            ...item,
            amount: item.amount.toString(),
        }));
        res.json(expenseByCategorySummary);
    }
    catch (error) {
        res.status(500).json({ message: "error while procceing data " });
    }
};
exports.getExpensByCategory = getExpensByCategory;
