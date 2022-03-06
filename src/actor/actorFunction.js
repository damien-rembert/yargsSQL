const Actor = require("./actorTable");

exports.addActor = async (personObj) => {
    try {
        await Actor.create(personObj);
    } catch (error) {
        console.log(error);
    }
};

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

