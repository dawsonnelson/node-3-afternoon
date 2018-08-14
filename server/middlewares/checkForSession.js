module.exports = function(req, res, next) {
    if(!req.session.users) {
        req.session.users = {
        username: '', cart: [], total: 0
        }
    } else{

    }
    
    next();
}