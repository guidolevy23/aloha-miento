const {DataTypes} = require('sequelize');

const User = (database) => {
    database.define("User" , {
        id_user:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false,
            unique:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // favorites:{
        //     type: DataTypes.ARRAY(DataTypes),
        //     allowNull: false,
        // },
        image:{
            type: DataTypes.STRING,
            isUrl:true,
        }
    
        },{
            timestamps:false
        })
}
module.exports = User;
