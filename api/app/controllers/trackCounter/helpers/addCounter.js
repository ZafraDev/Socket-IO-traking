const { createItem } = require("../../../middlewares/db");
const TrackCounter = require("../../../models/TrackCounter");

const addCounter = async (userId) => {
    const counter = await TrackCounter.updateOne(
        { user: userId },
        { $inc: { seq: 1 } },
        { new: true }
    ).lean();
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
    addCounter
}