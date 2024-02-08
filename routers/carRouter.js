const express=require("express")
const carModel=require("../models/carModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
  let data=req.body
  let carModelObj1=new carModel(data)
  await carModelObj1.save()
  res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
  let data=await carModel.find()
  res.json(data)
})

router.post("/search",async(req,res)=>{
  let data=req.body
  let modelObj=await carModel.find(data)
  res.json(modelObj)
})

module.exports=router