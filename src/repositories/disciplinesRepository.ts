import client from "../database";

export async function findById(id: number) {
  return await client.disciplines.findUnique({ where: { id } });
}

export async function findAllByCategory(category: string) {
  return await client.disciplines.findMany({
    // where: {
    //     teachersDisciplines: {
    //     some: {
    //       tests: {
    //         some: {
    //           category: {
    //             name: category,
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  });
}

export async function findByName(name: string) {
  return await client.disciplines.findUnique({ where: { name } });
}
