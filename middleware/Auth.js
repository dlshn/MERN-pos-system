const jwt = require('jsonwebtoken');
const User = require('../model/UserSchema');
const verifyToken = (requiredRoles=[])=>{
    return async (req, res, next)=>{
        try{
            const token = req.headers['aurthorization']?.split(' ')[1];
            if(!token){
                return res.status(403).json({message:'Access Denide, no token provide'});

            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            const user = User.findOne({username:decoded.username});
            if(!user){
                return res.status(404).json({message:'User not found..'});
            }

            if(requiredRoles.length && !requiredRoles.includes[user.roles]) {
                return res.status(403).json({message:'You have not access..'});
            }

            next();
        }catch(erroe){
            if(error.name === 'JsonWebTokenError'){
                return res.status(401).json({message:'Invalid Token..'});
            } else if(error.name==='TokenExpiredError'){
                return res.status(401).json({message:'token has expired'});
            }
            return res.status(500).json({message:'internal server error..'});
        }
    }

}
module.exports = verifyToken;