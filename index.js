const {Translate} = require('@google-cloud/translate').v2;
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http);
// const axios = require('axios');
const SERP_API_KEY = "01796e08e3afe25c1361cbabb4a5cd9d1fa9b0178a5f5a0bb001b29340c5edf6"
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(SERP_API_KEY)
const translate = new Translate();
const WordPOS = require('wordpos');

wordpos = new WordPOS();

app.use(express.static('public'));

translation_text = "";

async function translateText(text, target) {
	let [translations] = await translate.translate(text, target);
	translations = Array.isArray(translations) ? translations : [translations];
	console.log('Translations: ');
	text = ""
	translations.forEach((translation, i) => {
		text += translation;
		console.log(`${text[i]} => (${target}) ${translation}`);
	})
	return text;
}



io.on('connection', socket => {

	socket.on('translate', async data => {
		text = data[0];
		target = data[1];
		socket.emit('translateBack', await translateText(text, target));
	});

	socket.on('image', data => {

		wordpos.getNouns(data, function(result) {
			if (result.length != 0) {
				
				const params = {
					q: result[0],
					tbm: "isch",
					ijn: "0"
				};
		
				search.json(params, function(data) {
					socket.emit('imageBack', data);
				});
			};
		});
	});
		
})

http.listen(3001, console.log(`Started at ${new Date().toISOString()}`));



