const Users = require('../users/users-model')

async function checkCredentials(req, res, next){
    try{
        const {username, password} = req.body;
        if(!username || !password){
            res.json({message:"username and password required"})
        }else{
            next()
        }
    }catch (err){
        next(err)
    }
}

async function checkUserFree(req, res, next){
    try{
        const {username} = req.body;
        const [userFromDb] = await Users.findBy({username})
        if(userFromDb){
            // return next({status: 422, message: "username taken"})
            res.json({message: "username taken"})
        }else{
            next()
        }
    }catch (err){
        next(err)
    }
}

async function checkUserExists(req,res,next){
    try{
        const {username} = req.body;
        const [userFromDb] = await Users.findBy({username});
        if(!userFromDb){
            res.json({message: "invalid credentials"})
        }else{
            next()
        }
    }catch (err){
        next(err)
    }
}

module.exports = {
    checkCredentials, checkUserFree, checkUserExists
}