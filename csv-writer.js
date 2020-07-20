module.exports = function(data, path) {

	const createCsvWriter = require('csv-writer').createObjectCsvWriter;

	const csvWriter = createCsvWriter({
		path: path,
		fieldDelimiter: ";",
		header: [
			{id: "order", title: "Order"},
			{id: "name", title: "Original track name"},
			{id: "finded_name", title: "Finded track name"},
			{id: "uri", title: "Spotify URI"}
		]
	});

	csvWriter
		.writeRecords(data)
		.then(() => console.log(path, "is written successfully!"))
};