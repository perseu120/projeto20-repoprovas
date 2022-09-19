import supertest from 'supertest';
import app from '../app';
import client from '../database';

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE categories;`; 
  });
afterAll(async () => {
    await client.$disconnect();
})

const APP = supertest(app);

describe("search category", () => {
    it("test category search ", async () => {
        
        const result = await APP.get('/categories').send()
        expect(result.status).toEqual(200);
    });

    it("test when the fault search",async ()=>{
        const result = await APP.get('/categories').send()

        expect(result.status).toEqual(404);
    })
});