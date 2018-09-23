module.exports = {
    requiresLogin: function(res,req, next){
        if(req.session && req.sessionUserId){
            return next();
        }
        var error = new Error("You must be logged in to view this page");
        return next(error);
    }
}