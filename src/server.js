const http = require('http');
const fs = require('fs');

const port = process.env.port || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const onRequest = (request, response) => {
    if (request.url === '/style.css') {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(css);
        response.end();
    }
    else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(index);
        response.end();
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
