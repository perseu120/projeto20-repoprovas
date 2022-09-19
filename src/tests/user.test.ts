import  * as authService from '../services/authService';
import supertest from 'supertest';
import app from '../app';
import client from '../database';

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE users;`; //limpar a tabela usuarios
  });
afterAll(async () => {
    await client.$disconnect();
})

const APP = supertest(app);

describe("register test ", () => {
    it("if you pass login and password, and logging in should return a token ", async () => {
        
        const result = await APP.post('/signup').send({email:"josim@gmail.com", password:"123465789"})

        expect(result.status).toEqual(201);
    });

    it("if I don't pass the username and password and try to login",async ()=>{
        const result = await APP.post('/signup').send({})

        expect(result.status).toEqual(422);
    })
});

describe("login test ", () => {
    it("when you pass the email and password to register in the bank ", async () => {

        await APP.post('/signup').send({email:"josim@gmail.com", password:"123465789"})
        
        const result = await APP.post('/signin').send({email:"josim@gmail.com", password:"123465789"})

        expect(result.status).toEqual(200);
    });

    it("try to login with a user that does not exist",async ()=>{
        const result = await APP.post('/signup').send({})

        expect(result.status).toEqual(422);
    })
});