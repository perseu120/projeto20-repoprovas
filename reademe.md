# <p align = "center"> Projeto DrivenPass </p>

<p align="center">
   <img src="https://www.svgrepo.com/show/326776/reader-outline.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Josimar-4dae71?style=flat-square" />
</p>


## Descrição

projeto pra guarda provas desenvolvido na driven education com o proprozito de lapida minha habilidade

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs
- Node.js
- TypeScript
- Jest
- Supertest

***

## :rocket: Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
GET /categories (autenticada)
    - Rota para retornar as categorias de provas
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /disciplines (autenticada)
    - Rota retornar as diciplinas
    - headers: { }
    - body: {}
``` 

```yml
GET /teachers (autenticada)
    - Rota retornar as diciplinas por professores
    - headers: { }
    - body: { }
```
