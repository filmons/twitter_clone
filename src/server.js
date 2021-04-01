const express = require('express')
const ejs = require('ejs');
const sass = require('node-sass-middleware');
const cookieParser = require('cookie-parser');

const router = require("./routers");

const server = express()

server.use(sass({
    src: "./src",
    dest: "./src/assets"
}));

server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

server.use(router);

server.engine("ejs", ejs.renderFile);
server.set("views", "./src/views");
server.use(express.static("./src/assets"));




const port = 3080;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

// server.get('/', (request, response) => {
//     response.send('Hello World!')
// })