import dotenv from "dotenv";
import pkg from "@prisma/client"; // precisamos instalar esse pacote!

dotenv.config();

const { PrismaClient } = pkg;

const client = new PrismaClient();


export default client;