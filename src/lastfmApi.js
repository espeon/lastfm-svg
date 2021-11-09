
const axios = require("axios")

const userRecentTracks = async (username) => {

  const imageRegex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

  const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${process.env.LASTFM_API_KEY}&format=json`);
  const recentTracks = res.data.recenttracks
  let result = {amount: recentTracks["@attr"].total, songs:[]};

  recentTracks.track.forEach((track) => {
    let item = {}
    const img = track.image[3]["#text"];
    if (img) {
      item.image = img;
    }
    item.songTitle = track.name;
    item.artistName = track.artist["#text"];
    result.songs = [...result.songs, item];
  });

  return result;

};

module.exports = { userRecentTracks };