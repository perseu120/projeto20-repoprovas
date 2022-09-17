import client from "../database";

export interface User {
  id: number;
  email: string;
  password: string;
}

export type UserInsertData = Omit<User, "id">;

export async function createUser(user: UserInsertData){

  await client.users.create({
    data: user
  });
}

export async function findUserByEmail(email: string) {
  return await client.users.findUnique({
    where: {
      email
    }
  });
}


