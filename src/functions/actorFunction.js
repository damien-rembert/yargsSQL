const Actor = require("../elements/models");
// const { addMovie } = require("../movie/movieFunction");



exports.addActor = async (personObj) => {
    try {
        await Actor.create(personObj);
    } catch (error) {
        console.log(error);
    }
};

exports.addActorToFilm = async (name, yob, title) => {
    try {
        const theActor = await Actor.create({fullName: name,         yearOfBirth: yob});
        await theActor.addMovies([title, "bestFilm", "Otherfilm"])
    } catch (error) {
        console.log(error);
    }
};

// await addActor({fullname: yargsObj.name, yearOfBirth: yargsObj.yob});
// const amidala = await User.create({ username: 'p4dm3', points: 1000 });
// const queen = await Profile.create({ name: 'Queen' });
// await amidala.addProfile(queen, { through: { selfGranted: false } });




exports.listActors = async () => {
    // console.log("filterObj: ", filterObj);
    try {
        
        return await Actor.findAll();
        
        
    } catch (error) {
        console.log(error);
    }
};


exports.deleteActor = async (filterObj) => {
    try {
        return await Actor.destroy({
            where: filterObj});
    } catch (error) {
        console.log(error, "It did not update")
    }
}

