const mongoose=require('mongoose')

const userSchima= new mongoose.Schema({
    name:{
       type: String ,
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number
    }
})
module.exports=user=mongoose.model('user', userSchima)