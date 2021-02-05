var express= require('express');
const app = express();
var path = require('path')
const server = require('http').createServer(app);
var cors = require('cors')
const PORT = 3000;
server.listen(PORT);
console.log(`Servidor rodando na porta: ${PORT}`);

app.use(cors())
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });