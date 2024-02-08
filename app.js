const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const carRouter=require("./routers/carRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://avanthik:avanthik@cluster0.yuxak7x.mongodb.net/carDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/car",carRouter)

app.listen(3000,()=>{
  console.log("server is running..")
})