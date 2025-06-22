const { watch } = require("fs")

npm init
npm i express
npm i body-parser
npm i cors

// https://www.prisma.io/docs/getting-started/quickstart-sqlite
npm i typescript tsx @types/node

npx tsc --init
npm i prisma 
npx prisma init --datasource-provider mongodb

npx prisma generate

node --watch server.js

npm i jsonwebtoken
npm i dotenv

// 14-Workshop-3
npx prisma db push 
