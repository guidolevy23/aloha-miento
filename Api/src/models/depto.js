const {DataTypes} = require('sequelize');

const Depto = (database) => {
    database.define("Depto", {
        id_depto:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        meters:{
            type: DataTypes.INTEGER,
            allowNull : false,

        },
        ubication:{
            type: DataTypes.STRING,
            allowNull : false,
        },
        owner:{
            type: DataTypes.STRING,
            allowNull : false,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull : false,
        },
        available:{
            type: DataTypes.BOOLEAN,
            allowNull : false, 
        },
        images:{
            type: DataTypes.ARRAY({
                type:DataTypes.STRING,
                isUrl: true,
            }),
            allowNull : false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull : false,
        },

    },{
        timestamps:false
    })
}

module.exports = Depto;