const { sequelize } = require("./db/connection");

const yargs = require("yargs");
const { addMovie, listMovies, updateDirector, deleteEntry } = require("./movie/movieFunction");
const { addActor, listActors, deleteActor } = require("./actor/actorFunction");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.addMovie) {
            await addMovie({title: yargsObj.title, director: yargsObj.director});
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.addActor) {
            await addActor({fullname: yargsObj.name, yearOfBirth: yargsObj.yob});
        } else if (yargsObj.listActors) {
            await listActors();
        } else if (yargsObj.deleteActor) {
            console.log(JSON.stringify(await deleteActor({[yargsObj.key]: yargsObj.value}), null, 2));
        } else if (yargsObj.list) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2));
        } else if (yargsObj.delete) {
            console.log(JSON.stringify(await deleteEntry({[yargsObj.key]: yargsObj.value}), null, 2));
        } else if (yargsObj.update) {
            console.log(JSON.stringify(await updateDirector(yargsObj), null, 2));
        } else {
            console.log("Incorrect command");
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);