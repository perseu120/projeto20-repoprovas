import supertest from 'supertest';
import app from '../app';
import client from '../database';

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE disciplines;`; 
  });
afterAll(async () => {
    await client.$disconnect();
})

const APP = supertest(app);

describe("search discipline", () => {
    it("test discipline search ", async () => {
        
        const result = await APP.get('/disciplines').send()
        expect(result.status).toEqual(200);
    });

    it("test when the fault search",async ()=>{
        const result = await APP.get('/disciplines').send()

        expect(result.status).toEqual(404);
    })
});