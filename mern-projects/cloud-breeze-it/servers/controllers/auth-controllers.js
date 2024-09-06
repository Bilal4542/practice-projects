const User = require('../models/user-model')
// home page logic
const home = async (req,res) => {
    try {
        res.status(200).send('Welcome to Cloud Breeze IT software House using controllers again');
    } catch (error) {
        console.log(error)
    }
}

// registeration page logic
const register = async (req,res) => {
    try {
        console.log(req.body)

        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email : email});
        if(userExist){
            return res.status(400).json({msg: 'Email Already Exists...'})
        }
        const userCreated = await User.create({username, email, phone, password})
        res.status(200).send({msg:userCreated});
    } catch (error) {
        res.status(500).json('internal server error')
    }
}
module.exports = {home,register}