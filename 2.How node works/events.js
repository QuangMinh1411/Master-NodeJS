const EvenEmitter = require("events");
const http = require("http");
class Sales extends EvenEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();
myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});
myEmitter.on("newSale", () => {
  console.log("Customore name: Quang");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items in stock.`);
});
myEmitter.emit("newSale", 9);

///////////////
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request 😇  ");
});
server.on("close", () => console.log("Server close"));
server.listen(8000, "127.0.0.1", () => console.log("Waiting for request"));
