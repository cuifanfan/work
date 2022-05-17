const queryString = require('querystring')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  let params = queryString.parse(req.url.split('?')[1])
  let fn = params.callback

  // JSONP返回设置
  res.writeHead(200, {
    'Content-Type': 'text/javascript'
  })

  res.write(fn + '(' + JSON.stringify(params) + ')')
  res.end()
})

server.listen('8080', () => {
  console.log('server is running at port 8080...');
});