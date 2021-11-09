const { getItemsByQuery } = require('../../../middlewares/db')
const Track = require('../../../models/Track')

const getTracksByUserId = async (userId, seq) => {
    const tracks = await getItemsByQuery({ user: userId, seq }, Track);
    return tracks;
}

module.exports = { getTracksByUserId };