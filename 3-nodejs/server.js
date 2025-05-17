// npm init 
// npm install express
// npm install nodemon --save-dev
// nodemon server.js
// This code creates a simple HTTP server using the Express framework.

// node --watch server.js


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  res.send(req.body);
});

app.put('/myPut', (req, res) => {
  res.send(req.body);
}
);

app.delete('/myDelete/:id', (req, res) => {
  res.send(`Deleted item with ID: ${req.params.id}`);
});

// 

const fs = require('fs');
app.get('/writeFile', (req, res) => {
    fs.writeFileSync('myFile.txt', 'Hello World');
    res.send('File written successfully');
}
);

app.get('/readFile', (req, res) => {
    const data = fs.readFileSync('myFile.txt', 'utf8');
    res.send(data);
}
);

// 

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
}
);

// This code creates a simple HTTP server using the Express framework.
// It listens on port 3001 and responds with "Hello World!" when the root URL (/) is accessed.
// The server is started by calling the listen method on the app instance, which binds the server to the specified port.
// The console.log statement confirms that the server is running and provides the URL to access it.
// The app.get method defines a route handler for the root URL, which sends a plain text response to the client.
// The app.listen method starts the server and listens for incoming requests on the specified port.
// The app.get method is used to define a route handler for the root URL (/) of the server.
// The res.send method sends a response back to the client with the specified content.
// The res.send method is used to send a response back to the client.

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
//   res.send('Hello ' + name);
} 
);

app.get('/hello/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.send(`Hello, ${name}! You are ${age} years old.`);
}
);

