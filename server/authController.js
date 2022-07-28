import User from "./models/User.js"

class authController {
    async registration(req,res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username})
            if(candidate){
                res.status(400).json({message: "This user already exist"})
            }
            const user = new User({username,password});
            await user.save()
            return res.json({message: "Successfully registered!"})
        } catch (error) {
            console.log(error);
            res.status(400).json({message : "something went wrong"})
        }
    }
    async login(req,res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username})
            if(!user){
                res.status(400).json({message:"This user does not exist!"})
            }
            if(password != user.password){
                res.status(400).json({message:"Wrong password!Try again"})
            }
            if(password == user.password){
                res.status(200).json({message:"Successfully singed in!"})
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({message : "something went wrong"})
        }
    }
}
export default new authController()