const queryString = require('querystring')
const http = require('http')

http.createServer()
  .on('request', function(req, res) {
    let params = queryString.parse(req.url.split('?')[1])
    res.write(JSON.stringify(params) + '>node.js')
    res.end()
  })
  .listen(8080, function() {
    console.log('server is running at 8080....');
  })