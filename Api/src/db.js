const {Sequelize} = require('sequelize');
require('dotenv').config();
const DeptoModel = require('./models/depto.js');
const UserModel = require('./models/user.js');
const SellerModel = require('./models/seller.js');
const {
    DB_USER, DB_PASS, DB_NAME,
  } = process.env;


const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@localhost:5432/${DB_NAME}`
,{logging:false});
// CONEXION CON LA BASE DE DATOS


UserModel(database);
DeptoModel(database);
SellerModel(database);

const {User , Depto , Seller} = database.models

Depto.belongsToMany(User, {through: "DeptoUser"} );
User.belongsToMany(Depto, {through: "DeptoUser"} );

Seller.hasMany(Depto);
Depto.belongsTo(Seller);


module.exports = {database , ...database.models};