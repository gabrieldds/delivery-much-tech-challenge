# delivery-much-tech-challenge

O desafio da Delivery Tech Much exige um endpoint que traga informações conjuntas de receitas por meio de até 3 ingredientes informados numa consulta e um gif relacionado ao título da receita.

## Running

Para rodar o projeto deve-se adicionar a API_KEY obtida no site https://developers.giphy.com/docs/sdk. Após isso pode-se rodar tanto com docker-compose ou no terminal com npm ou yarn.

Para versão com docker:

```
docker-compose up --build
```
ou
```
yarn start | npm start
```
Pode-se rodar um versão com nodemon:
```
yarn run start:dev | npm run start:dev
```

Os testes podem ser rodados com:
```
yarn run test
```

## Organização

Todos os arquivos estão na pasta 'src'. A arquitetura é definida em controllers, services e routes. Existe o recipeService, recipeController e recipeRouter. o recipeService tem contato direto com as apis de recipes e gifs, o controller recebe as requisições vindas do router e encaminha dos dados para os services. As variáveis de ambiente são chamadas no arquivo env.js dentro da pasta config e o express é carregado em loaders.

## Endpoint

```
http://localhost:3000/recipes/?i={ingredient1},{ingredient2},{ingredient3}
```