// const express = require('express');
// const ejs = require('ejs');
// const sass = require('node-sass-middleware');
// const cookieParser = require('cookie-parser');

// const router = require("./routers");

// const server = express();

// server.use(sass({
//   src: "./src",
//   dest: "./src/assets"
// }));

// server.engine("ejs", ejs.renderFile);
// server.set("views", "./src/views");
// server.use(express.static("./src/assets"));

// server.use(express.urlencoded({ extended: false }));
// server.use(cookieParser());

// server.use(router);

// server.listen(4040, () => {
//   console.log("Server running at port 4040");
// });