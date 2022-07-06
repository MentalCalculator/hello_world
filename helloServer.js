const http = require('http');

http.createServer((request, response) => {
    if (request.url === '/hello'){
        response.write('It is great to see you!');
    } else {
        response.write('Hello World!');
    }

    response.end();
}).listen(4003);