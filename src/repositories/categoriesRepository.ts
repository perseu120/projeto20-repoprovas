import client from "../database";

export async function findById(id: number) {
  return await client.categories.findUnique({ where: { id } });
}

export async function findByName(name: string) {
  return await client.categories.findUnique({ where: { name } });
}

export async function find() {
  return await client.categories.findMany();
}
