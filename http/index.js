const http = require("http");
//The listen property tells that at which port you should listen and will be created
// console.clear();

http
  .createServer(function (req, res) {
    console.log(req.url);
    //res.write("<h1>My First Page of Server</h1>");
    switch (req.url) {
      case "/":
        res.write("<h1>Welcome to the Homepage of Server</h1>");
        break;
      case "/hobbies":
        res.write("<h1>Here Hobbies are Placed</h1>");
        break;

      default:
        res.write("<h1>Page not Found</h1>");
        break;
    }
    res.end();
  })
  .listen(8080);
