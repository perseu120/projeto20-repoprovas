import client from "../database";

export interface User {
  id: number;
  email: string;
  senha: string;
}

export type UserInsertData = Omit<User, "id">;


// export type CardUpdateData = Partial<Card>;

export async function exemploConsultaBanco(user: UserInsertData){

  await client.users.create({
    data: {
        email: user.email,
        senha: user.senha
    }
  });
}
