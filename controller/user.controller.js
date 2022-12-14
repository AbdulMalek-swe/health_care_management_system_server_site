const {
    postSignUpService,
    postSignInService,
    findUserByEmail
     } = require("../service/user.service");
const { generateToken } = require("../utils/token");
module.exports.postSignUp = async (req, res, next) => {
    try {
        // console.log(req.body);
        const user = await postSignUpService(req.body);
        // console.log(user);
        // await user.save({validateBeforeSave:false})
        const token = generateToken(user)
        res.status(200).json({
            status: "succesfful",
            message: "get user data",
            token:token
          });  
    } 
    catch (error) { 
        
             res.status(501).json({
                message:"unAuthorized",
                error:error.message
             }) 
    }
}
module.exports.postSignIn = async(req,res,next)=>{
    try{
        if(!req.body.password|!req.body.email){
            return  res.status(501).json({
                error:"email or password is missing"
             })
        }
        const user = await postSignInService(req.body.email);
         if(!user){
            return  res.status(501).json({
                error:"email not found",
             })
         }
      const isPassword =    user.comparePassword(req.body.password,user.password)
      if(!isPassword){
        return  res.status(501).json({
            error:"password not found"
         })
     }
     const token = generateToken(user);
         res.status(200).json({
            message:"user find",
            token:token
         })
    }

    catch(error){
        res.status(501).json({
           message:"unAuthorized",
           error:error.message
        })
    }
}
module.exports.getMe = async(req,res,next)=>{
    try{
        const result = await findUserByEmail(req.user?.email);
        const {password:pwd,...others} = result.toObject();
        res.status(200).json({
            user:others
         })
    }
    catch(error){

    }
}