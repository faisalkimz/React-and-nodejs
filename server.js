const http = require('http')
const {name} = require('./index')
const server = http.createServer((req, res) => {
    console.log("This is the request sent")
    name();
    res.writeHead(200, { 'Access-Control-Allow-Origin' : '*'})
    res.write(JSON.stringify({ 'Name': 'Faisal'}))
    res.end()
})
server.listen(8080, (err) => {
    if (err) console.log(err)
    console.log("I am their big man")
})
