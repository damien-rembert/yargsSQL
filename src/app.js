const { sequelize } = require("./db/connection");

const yargs = require("yargs");
const { addMovie, listMovies, updateDirector, deleteEntry } = require("./movie/movieFunction");
const { addActor, listActors, deleteActor, addActorToFilm } = require("./actor/actorFunction");

const app = async (yargsObj) => {
    try {

        await sequelize.sync();
        if (yargsObj.addM) {
            await addMovie({title: yargsObj.title, director: yargsObj.director});
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.addA) {
            await addActor({fullName: yargsObj.name, yearOfBirth: yargsObj.yob});
        } else if (yargsObj.addAtoF) {
            await addActorToFilm(yargsObj.name, yargsObj.yob, yargsObj.title);
        } else if (yargsObj.lista) {
            await listActors();
        } else if (yargsObj.deletea) {
            console.log(JSON.stringify(await deleteActor({[yargsObj.key]: yargsObj.value}), null, 2));
        } else if (yargsObj.list) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2));
            console.log(JSON.stringify(await listActors(), null, 2));
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