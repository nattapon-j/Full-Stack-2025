const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');

const { UserController } = require('./controllers/UserController');
const { CompanyController } = require('./controllers/CompanyController');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/api/user/signin", UserController.signIn);

app.post("/api/company/create", CompanyController.createCompany);
app.get("/api/company/list", CompanyController.list); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

