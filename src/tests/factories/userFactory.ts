import supertest from 'supertest';
import app from '../../app';

const APP = supertest(app);

async function register() {
    await APP.post('/signup').send({email:"teste@gmail.com", password:"123465789"})     
}

async function login() {
    const result = await APP.post('/signin').send({email:"teste@gmail.com", password:"123465789"})
    return result.body;
}

async function registerAndLogin() {
    await register();
    const token = await login();
    
    return token;
}

const userFactory = {

    register,
    login,
    registerAndLogin
}

export default userFactory;