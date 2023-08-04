const { SECRET } = require("../config/config");
const jwt = require("../lib/jwt");



exports.auth = async (req, res, next) => {
    const token = req.cookies['token'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token , SECRET)
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.Authenticated = true
            next();
        } catch (err) {
            res.clearCookie('token');

           
        }
    } else {
        next(); 
    }
}

