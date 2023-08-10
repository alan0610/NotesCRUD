const app = require('./app')
const http = require('http')

const server = http.createServer(app)

server.listen(3030, ()=>{ 
    console.log('Started on port 3030');
});