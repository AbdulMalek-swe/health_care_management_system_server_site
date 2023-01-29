const User = require("../model/user.model")
module.exports.postSignUpService =async(data)=>{
    // console.log( data);
    const result = await User.create(data);
    
    return result;
}
module.exports.postSignInService = async(email)=>{
    console.log(email);
    const result = await User.findOne({email:email});
    return result;
}
module.exports.findUserByEmail=async(email)=>{
       return await User.findOne({email:email})
}