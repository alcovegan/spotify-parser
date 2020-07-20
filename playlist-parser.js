const playlistFormat = process.argv[2];
const fs = require("fs");
const re = /#EXTINF:(\d+),/;

const parseM3U = function() {
	return fs.readFileSync("./playlist.m3u", { encoding: "utf8" })
		.split("\n")
		.filter(l => l.indexOf("#EXTINF:") !== -1)
		.map((l, idx) => {
			return {
				"q": l.replace(re, ""),
				"order": idx + 1
			}
	});
}

const parseTXT = function() {
	return fs.readFileSync("./playlist.txt", { encoding: "utf8" })
		.split("\r\n")
		.map((l, idx) => {
			console.log(l);
			return {
				"q": l.replace(re, ""),
				"order": idx + 1
			}
	});
}

const playlist = playlistFormat === "TXT" ? parseTXT() : parseM3U();

module.exports = function() {

	fs.writeFileSync("./tracks.json", JSON.stringify(playlist));
};