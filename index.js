const token = process.argv[3];
const handler = require("./handler");
const csv = require("./csv-writer");
const filterer = require("./filterer");
const playlistParser = require("./playlist-parser")();
const tracks = require("./tracks");

const apiParser = require('async-parser');

const resultsCallback = (response) => {
	const filterResults = filterer(response.results);
	const finded = filterResults.finded;
	const notfinded = filterResults.notfinded;

	csv(finded, "./output/added.csv")
	csv(notfinded, "./output/notadded.csv")
}

apiParser({
	writeToFile: true,
	outputPath: './output',
	outputFileName: 'results.json',
	operationsLimit: 2,
	assets: tracks,
	urlSchema: {
			baseUrl: 'https://api.spotify.com',
			prefix: '/v1/search',
			query: {
				type: 'track',
				limit: 1
			},
		changingAssets: ['q']
	},
	handler: handler,
	customAxiosConfig: {
		headers: { Authorization: `Bearer ${token}` },
	}
}, resultsCallback);