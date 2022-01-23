# ProcastiPoint!
![Screenshot](img/usage.jpg)

## Features
Creates presentation automatically and in realtime as the demonstrator presents. There are 5 modes in this version, switched by key operation.
* <kbd>w</kbd> - Word Cloud, updates word cloud realtime, size of word increases by the number of times it is spoken. (Default)
* <kbd>t</kbd> - Text. Automatically creates list of bullet points.
* <kbd>l</kbd> - Translation. Translates spoken English into French text in bullet points.
* <kbd>q</kbd> - Quotation. Present quote together with an image of the auther.
* <kbd>i</kbd> - Image. Show image of the keyword.

Translation language can easily changed by changing the language code ```"fr"``` shown below.
```javascript
	function render_translation() {
		serverSocket.emit('translate', [LARGE_TRANSCRIPT, "fr"]);
	}
```

## Inspiration
Coursework at Cambridge is tough, so we strived to make a program that made presentations easier. Our program creates a slodeshow on the fly using DeepGram's API.

## How we built it
Using JavaScript, HTML and the Deepgram API

## Challenges we ran into
We spent lots of early development time trying to make low latency audio streaming in Python. Grudgingly, we decided that this wasn't the way forward and wrote the whole project in Javascript.

## Accomplishments that we're proud of
Despite having near zero knowledge of Javascript, we picked it up as we went along somehow finding our way through asynchronous JS.

## What we learned
JavaScript is terrible. Or maybe not.

## What's next for ProcrastiPoint
Add more functionality/themes for the slides.
