const http = require('http');
const fs = require('fs')

const hostname = 'localhost';
const port = 3000;

const paths = {
    indexPath: '../front-end/index.html',
    css: '../front-end/css/index.css'
}
const index = fs.readFileSync(paths.indexPath)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Type', "stylesheet")
  res.end(index)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});