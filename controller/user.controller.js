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
        await user.save({validateBeforeSave:false})
        // const token = generateToken(req.body.email)
        res.status(200).json({
            status: "succesfful",
            message: "get user data",
            // token:token
            user:user
          });  
    } 
    catch (error) { 
          console.log(error.message);
             res.status(501).json({
                message:"unAuthorized",
                error:error.message
             }) 
    }
}
module.exports.postSignIn = async(req,res,next)=>{
    try{
        console.log(req.body);
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
    
        const result = await findUserByEmail(req.params.email);
        const {password:pwd,...others} = result.toObject();
        res.status(200).json({
            user:others
         })
    }
    catch(error){

    }
}
module.exports.getToken = async(req,res,next)=>{
    try{
        const result = await findUserByEmail(req.query.email);
        const token = generateToken(result);
        console.log(token);
        res.status(200).json({
            token
         })
    }
    catch(error){

    }
}