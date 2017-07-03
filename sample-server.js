let PORT = 8703;

let fs = require('fs');
let path = require('path');

require('http').createServer((req, res) => {

	let url = req.url;
	if (url.indexOf('?') !== -1) {
		url = url.substring(0, url.indexOf('?'));
	}
	if (url === '/') {
		url = '/index.html';
	}

	let filepath = './' + url;
	let extname = path.extname(filepath);
	let contentType = 'text/html';

	switch (extname) {
	case '.js':
		contentType = 'text/javascript';
		break;
	case '.css':
		contentType = 'text/css';
		break;
	case '.jpg':
	case '.jpeg':
		contentType = 'image/jpeg';
		break;
	case '.png':
		contentType = 'image/png';
		break;
	}

	fs.exists(filepath, (exists) => {
		if (exists) {
			fs.readFile(filepath, 'binary', (err, data) => {
				if (err === null) {
					res.writeHead(200, {
						'Content-Type' : contentType
					});
					res.write(data, 'binary');
					res.end();
				} else {
					res.writeHead(500, {
						'Content-Type' : 'text/plain'
					});
					res.write(err.toString());
					res.end();
				}
			});
		} else {
			res.writeHead(404, {
				'Content-Type' : 'text/plain'
			});
			res.write('404 Not Found.');
			res.end();
		}
	});
	
}).listen(PORT);

console.log('Started Server! http://localhost:' + PORT);
