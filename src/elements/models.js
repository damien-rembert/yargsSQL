const { DataTypes } = require("sequelize");

const { sequelize } = require("../db/connection");

// here we're not defining a schema and then a model as opposed to mongoose
const Actor = sequelize.define(
    "Actor", { 
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        yearofbirth: {
            type: DataTypes.STRING,
            allowNull: true,
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

// should be created automatically but trying to debug things here
const ActorMovies = sequelize.define('ActorMovies', {
    MovieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie, // 'Movies' would also work
        key: 'id'
      }
    },
    ActorId: {
      type: DataTypes.INTEGER,
      references: {
        model: Actor, // 'Actors' would also work
        key: 'id'
      }
    }
  });

// const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
// const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });

module.exports = Actor;
module.exports = Movie;