const express= require("express")

const app=express()
const port= 8000

// app.use(express.static("public"))

app.use((req,res,next)=>{
    console.log('m1');
    next()
})

app.use((req,res,next)=>{
    console.log('m2');
    next()
})
app.use((req,res,next)=>{
    console.log('m3');
    next()
})
app.get("/",(req,res)=>{
    res.send(`hello`)
})
app.listen(port,()=>{
    console.log(`express is running on ${port}`);
})