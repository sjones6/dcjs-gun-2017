const { createServer } = require('http')
const Gun = require('gun')

const http = createServer((req, res) => res.end("What's up DCJS"))

var gun = new Gun({
    web: http,
    verify: {
        check: function() {
            console.log("Peer connected!")
            return true
        }
    }
})

http.listen(8000)