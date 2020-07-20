module.exports = function(response, asset) {
	console.log(`${asset.order}. Parsing: ${asset.q}`);
	const artistName = response.data.tracks.items[0] !== undefined ? response.data.tracks.items[0].artists[0].name : 0;
	const trackName = response.data.tracks.items[0] !== undefined ? response.data.tracks.items[0].name : 0;
	const uri = response.data.tracks.items[0] !== undefined ? response.data.tracks.items[0].uri : 0;

	return { "order": asset.order, "name": asset.q, "finded_name": `${artistName} - ${trackName}`, uri }
};