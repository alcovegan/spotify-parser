const fs = require("fs");

module.exports = function(data) {
	const finded = data.filter(x => x.uri !== 0);
	const notfinded = data.filter(x => x.uri === 0);

	console.log("Finded", finded.length, "tracks");
	console.log("Not finded", notfinded.length, "tracks");

	fs.writeFileSync("./output/filtered-finded.json", JSON.stringify(finded));
	fs.writeFileSync("./output/filtered-notfinded.json", JSON.stringify(notfinded));

	return {
		finded,
		notfinded
	}
};