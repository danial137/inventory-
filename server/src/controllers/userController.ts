import { Request, Response } from "express";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.users.findMany();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error " });
  }
};
