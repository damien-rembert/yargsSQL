const { DataTypes } = require("sequelize");

const { sequelize } = require("../db/connection");

const Movie = require("../movie/movieTable");


// User.hasMany(Task); // Will add userId to Task model
// Task.belongsTo(User); // Will also add userId to Task model


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

// const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
// const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
// Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });

module.exports = Actor;