import supertest from 'supertest';
import app from '../app';
import client from '../database';
import userFactory from '../tests/factories/userFactory'

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE categories CASCADE;`; 
});
afterAll(async () => {
    await client.$disconnect();
})

const APP = supertest(app);

describe("search category", () => {
    it("test category search ", async () => {

        const {token} = await userFactory.registerAndLogin();
        const header = `Bearer ${token}`;

        const result = await APP.get('/categories').set("Authorization", header);
        expect(result.status).toEqual(200);
    });

    it("teste category when dont send a token",async ()=>{

        const result = await APP.get('/categories').set("Authorization" , "");

        expect(result.status).toEqual(401);
    })
});