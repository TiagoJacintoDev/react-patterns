const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let currentUser = {
  id: "123",
  name: "John Doe",
  age: 54,
  hairColor: "brown",
  hobbies: ["swimming", "bicycling", "video games"],
};

let users = [
  {
    id: "123",
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    id: "234",
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "math"],
  },
  {
    id: "345",
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    id: "1234",
    name: "Flat-Screen TV",
    price: "$300",
    rating: 4.2,
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json(users.find((user) => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json(users.find((user) => user.id === id));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
