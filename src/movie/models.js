const { DataTypes } = require("sequelize");

const { sequelize } = require("../db/connection");

// const Actor = require("../actor/actorTable")


// here we're not defining a schema and then a model



const Actor = sequelize.define(
    "Actor", { 
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        yearOfBirth: {
            type: DataTypes.INTEGER,
        },
});



const Movie = sequelize.define(
    "Movie", { 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        director: {
            type: DataTypes.STRING,
            defaultValue: "Not specified",
        },
});


// const Movie = sequelize.define(
//     "Movie", { 
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         }, 
//         actor: {
//             type: DataTypes.STRING,
//             defaultValue: "Not specified",
//         },
//         director: {
//             type: DataTypes.STRING,
//             defaultValue: "Not specified",
//         },
// });

// const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
// const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });

module.exports = Actor;
module.exports = Movie;