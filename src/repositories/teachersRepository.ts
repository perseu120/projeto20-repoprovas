import client from "../database";

export type RelationData = {
    disciplinesId: number;
    teachersId: number;
};

export async function findById(id: number) {
    return await client.teachersDisciplines.findUnique({ where: { id } });
}

export async function findByName(name: string) {
    return await client.teachers.findUnique({ where: { name } });
}

export async function findAllByDiscipline(discipline: string) {
    //fazer a query que retorna as categorias
}

export async function findRelationshipTeachDiscipline(relationData: RelationData) {
    return await client.teachersDisciplines.findFirst({
        where: relationData,
    });
}

export async function createRelationshipTeachDiscipline(relationData: RelationData) {
    return await client.teachersDisciplines.create({ data: relationData });
}