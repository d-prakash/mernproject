const mongoose = require("mongoose")

const TestimonialSchema= mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    createdon:{
        type:Date,
        default:Date.now,
    },
    lastupdated:{
        type:Date,
        default:Date.now,
    },
    post:{
        type:String,
    },
    active:{
        type:Boolean
    }
    
    
})

module.exports = mongoose.model("testimonila",TestimonialSchema)