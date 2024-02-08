const mongoose=require("mongoose")

const carModel=new mongoose.Schema({
  carId:{
    type:String,
    required:true
  },
  carName:String,
  carColor:String,
  carPrice:String
})

module.exports=new mongoose.model("carCollection",carModel)