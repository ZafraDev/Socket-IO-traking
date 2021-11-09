const { getItemByQuery, createItem } = require("../../../middlewares/db");
const TrackCounter = require("../../../models/TrackCounter");

const getCounterByUserId = async (userId) => {
    const counter = await getItemByQuery({ user: userId }, TrackCounter);
    if (!counter) {
        const counter = await createItem({
            seq: 1,
            user: userId
        }, TrackCounter);

        return counter;
    }
    return counter;
}

module.exports = {
    getCounterByUserId
}