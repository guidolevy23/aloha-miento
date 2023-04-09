const express = require("express");
const morgan = require("morgan");
const routes = require('./routes/index.js')
const cookieParser = require('cookie-parser')

const server = express();
server.use(express.json());
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/", routes);

module.exports = server;