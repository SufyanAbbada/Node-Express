const express = require("express");
const app = express();
//Express is a function and it will give you an object in return of the decleration
//And now this constant can be used instead of http.
app.use(express.json());
//This is a middleware and it is basically used to make express able to control the data that is obtained with PUT request.

console.clear();

let products = ["LCD", "PlayStation", "TV", "Remote Control"];

app.get("/", function (req, res) {
  res.send("Hello World!");
});

//The first parameter of this is the url that is hitted by any client.
app.get("/api/products", function (req, res) {
  res.send(products);
});
//Here we simply created or declared a variable that whenever the get request is sent with a specific ID, it will
//store that id part in the  'id' variable and it is accessed by the request parameters in the URL.
//So it is accessed by 'req.params' means the parameters passed with the request (from the client)
//And it is fetched from there.

//But this is the get method and also it is of all the elements. What we really need is to apply all other methods too
//First we have created the get request as a whole.
//Now lets create the single get request.

app.get("/api/products/:id", function (req, res) {
  let check = isNaN(req.params.id);
  if (check == true) {
    return res.status(400).send("Please Provide a numeric ID");
  }
  if (req.params.id > products.length) {
    return res.status(400).send("Could not find particular item");
  }
  res.send(products[req.params.id]);
});

//In put method we get the data from req.body and update it

app.put("/api/products/:id", function (req, res) {
  let check = isNaN(req.params.id);
  if (check == true) {
    return res.status(400).send("Please Provide a numeric ID");
  }
  if (req.params.id > products.length) {
    return res.status(400).send("Could not find particular item");
  }
  console.log(req.body);
  console.log(
    `Previous Item was ${products[req.params.id]} but now enhanced to ${
      req.body.name
    }`
  );
  products[req.params.id] = req.body.name;
  res.send(products[req.params.id]);
});

//Lets now simply delete some entry from the array.

app.delete("/api/products/:id", function (req, res) {
  let check = isNaN(req.params.id);
  if (check == true) {
    return res.status(400).send("Please Provide a numeric ID");
  }
  if (req.params.id > products.length) {
    return res.status(400).send("Could not find particular item");
  }
  res.send(products[req.params.id]);
  products.splice(req.params.id, 1);
});

//Now lets simply add an entry to the main array.

app.post("/api/products", function (req, res) {
  console.log(req.body);
  products.push(req.body.name);
  var index = products.lastIndexOf(req.body.name);
  res.send(products[index]);
});

//Full API Completed.

app.listen(3000);
