const { sequelize } = require("./db/connection");

const yargs = require("yargs");
const { addMovie, listMovies, deleteMovie } = require("./functions/movieFunction");
const { addActor, listActors, deleteActor, addActorToFilm } = require("./functions/actorFunction");

const app = async (yargsObj) => {
    try {

        await sequelize.sync();

        if (yargsObj.addM) {
            await addMovie({title: yargsObj.title});
            console.log(JSON.stringify(await listMovies(), null, 2));

        } else if (yargsObj.addA) {
            await addActor({fullname: yargsObj.name, yearofbirth: yargsObj.yob});
        // } else if (yargsObj.addAtoF) {
        //     await addActorToFilm(yargsObj.name, yargsObj.yob, yargsObj.title);

        } else if (yargsObj.list) {
            console.log(JSON.stringify(await listMovies(), null, 2));
            console.log(JSON.stringify(await listActors(), null, 2));

        } else if (yargsObj.deleteM) {
            console.log(JSON.stringify(await deleteMovie({[yargsObj.key]: yargsObj.value}), null, 2));

        } else if (yargsObj.deletea) {
            console.log(JSON.stringify(await deleteActor({[yargsObj.key]: yargsObj.value}), null, 2));
            
        } else {
            console.log("Incorrect command");
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);