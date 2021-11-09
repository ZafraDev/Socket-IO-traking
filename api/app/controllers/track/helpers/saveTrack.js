const { createItem } = require('../../../middlewares/db')
const Track = require('../../../models/Track')

const saveTrack = async (track) => {
    const savedTrack = await createItem(track, Track);
    return savedTrack;
}

module.exports = { saveTrack };