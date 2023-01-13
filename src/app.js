import express from 'express';
import Contact from './file-writer.js';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urlencodedParser = express.urlencoded({extended: false});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    response.sendFile(__dirname + '/index.html');
    const userInfo = new Contact(`${request.body.name}`, `${request.body.surname}`, `${request.body.email}`, `${request.body.phone}`);
    userInfo.saveAsCSV();
});

app.listen(3000, () => console.log('Сервер запущен: http://localhost:3000/'));