const jwt=require("jsonwebtoken")

async function Login(req,res) {
    try {
        const exprationTime=60*60*27*7;
        const options={expiresIn:exprationTime}
        const payload =
        {
            email:req.body.email,
            password:req.body.password
        }
        const privateKey=process.env.JWT_KEY;
        console.log(privateKey);
        const token=jwt.sign(payload,privateKey,options)
        console.log(token);
        res.status(200).json({message:"token has been created",token:token,email:req.body.email})
    } catch (error) {
        console.log();
        res.status(420).json({message:`Login error ${req.body.name} try again later ${res.status}`})
        console.log("login error")
    }
}
module.exports=Login;
