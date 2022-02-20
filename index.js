
const http = require("http") // importing http
const app = require("./app"); // importing app.js
const server = http.createServer(app); // creating server
const { APP_PORT } = process.env; // importing port from .env file
const PORT = process.env.PORT || APP_PORT; // setting port
server.listen(PORT, () => {
  console.log(`Server is running 🏃‍♂️ on port ${PORT}`);
}); 