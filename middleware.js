var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('Private route hit!');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on: ' + new Date().toString());
        next();
    }
}

module.exports = middleware;