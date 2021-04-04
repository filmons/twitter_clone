const express = require('express')
const ejs = require('ejs');
const sass = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { flash } = require('express-flash-message');

const router = require("./routers");

const server = express()

// On startm run sass?
server.use(sass({
    src: "./src",
    dest: "./src/assets"
}));

// FLASH MESSAGES
server.use(session({
    secret: 'stopreadingmeimsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

server.use(flash({ sessionKeyName: 'flashMessage' }));
// LASH MESSAGES

server.engine("ejs", ejs.renderFile);
server.set("views", "./src/views");
server.use(express.static("./src/assets"));

server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

server.use(router);

const port = 8080;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});