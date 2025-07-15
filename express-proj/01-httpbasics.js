const http = require('http');
const { readFileSync } = require('fs');

// GET all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles  = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req , res)=> {
// console.log( "user hit the server")
// res.end('home page')
// console.log(req.url);
const url = req.url;

if (url === '/') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(homePage);
  res.end();
} 
else if (url === '/about') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
}
// styles

else if (url === '/styles.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(homeStyles);
    res.end();
}
// image
else if (url === '/logo.svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(homeImage);
    res.end();
}
// logic
else if (url === '/browser-app.js') {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
}
// 404 page

else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page Not Found 404</h1>');
    res.end();
}  

// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write('<h1>Welcome to my server</h1>');
// res.end()


 });
server.listen(5000, () => {
  console.log('Server is running on port 5000');
});