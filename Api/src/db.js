const {Sequelize} = require('sequelize');
require('dotenv').config();
const Depto = require('./models/depto.js');
const User = require('./models/user.js')
const {
    DB_USER, DB_PASS, DB_NAME,
  } = process.env;


const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@localhost:5432/${DB_NAME}`
,{logging:false});

User(database);
Depto(database);
// CONEXION CON LA BASE DE DATOS
module.exports = {database , ...database.models};