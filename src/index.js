const express = require("express");
const cors = require("cors");

const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.body;

  const user = users.find((user) => user.username === username);

  if (user) {
    return response.status(400).json({ error: "Mensagem do erro" });
  }

  request.user = user;

  return next();
}

app.post("/users", checksExistsUserAccount, (request, response) => {
  const { name, username } = request.body;

  const newUsers = {
    id: uuidV4(),
    name,
    username,
    todos: [],
  };

  users.push(newUsers);

  return response.status(201).json(newUsers);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;
