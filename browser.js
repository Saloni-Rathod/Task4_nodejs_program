var http =  require("http");
var uc = require('upper-case');
http.createServer(function (req, res) {
res.end(uc("hello node!!"));
}).listen(3000);


