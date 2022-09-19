import supertest from 'supertest';
import app from '../app';
import client from '../database';
import userFactory from './factories/userFactory';

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE disciplines CASCADE;`; 
  });
afterAll(async () => {
    await client.$disconnect();
})

const APP = supertest(app);

describe("search discipline", () => {
    it("test discipline search ", async () => {

        const {token} = await userFactory.registerAndLogin();
        const header = `Bearer ${token}`;

        const result = await APP.get('/disciplines').set("Authorization", header);
        expect(result.status).toEqual(200);

    });

    it("test when the fault search",async ()=>{
        const result = await APP.get('/disciplines').set("Authorization" , "");

        expect(result.status).toEqual(401);
    })
});