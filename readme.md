#### Como executar o projeto

##### No terminal, tendo o node instalado digite:

```
npm install
```

##### Crie um arquivo .env na raíz do projeto preenchendo conforme o arquivo .envExample:

```
DATABASE_HOST = IP_DO_BANCO
DATABASE_PORT = PORTA_DO_BANCO
DATABASE = NOME_DO_BANCO
DATABASE_USERNAME = USER_DO_BANCO
DATABASE_PASSWORD = SENHA_DO_BANCO
TOKEN_SECRET = ALGUMA_SENHA_QUALQUER
TOKEN_EXPIRATION = 1d

```

##### Para executar o projeto, digite no terminal:

```
npm run dev
```

##### Feito isso a API estará rodando. Recomendo utilizar o Insomnia ou o Postman para consumir a API e facilitar os testes e o desenvolvimento.
