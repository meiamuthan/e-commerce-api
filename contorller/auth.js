
const Profile = require('../database/Auth')

//get entire profile db
    const getTask = async(req,res)=>{
        try {
            const Task = await Profile.find()
            return res.status(200).json({nbHits:Task.length,msg:Task})
        } catch (error) {
            res.status(200).json({msg:error.message})
        }
    }


const LogIN = async(req,res)=>{
try {
    const profile = await Profile.findOne({EMAIL:'redmi@gmail.com'})
    console.log(profile.PASSWORD)
    const token =await profile.CreateJwt()

    return res.status(200).json({msg:profile,token})
} catch (error) {
    res.status(400).json({msg:error.message})    
}

}

const Register =async (req,res)=>{
try {
    const {NAME,PASSWORD,EMAIL} = req.body
    if(!NAME || !PASSWORD || !EMAIL){
        res.status(400).json({msg:'EMAIL,PASSWORD , NAME is requires'})
    }
    const profile = await Profile.create({NAME,PASSWORD,EMAIL})
    return res.status(200).json({msg:profile}) 
} catch (error) {
    res.status(200).json({msg:'failed to create',error:error.message})    
}

}

module.exports = {LogIN , Register,getTask}