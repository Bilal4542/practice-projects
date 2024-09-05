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
        res.status(200).send({message: req.body});
    } catch (error) {
        console.log(error)
    }
}
module.exports = {home,register}