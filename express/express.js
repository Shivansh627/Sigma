const ex= require("express");
const app= ex()
const port=3000

app.use(ex.static('public'))


app.post("/",(req,res)=>{
    res.send("hi")
})

app.get("/",(req,res)=>{
    res.send('hello world')
})
// // app.get("/shivansh",(req,res)=>{
// //     res.send('hello shivansh')
// // })

app.listen(port,()=>{
    console.log(`express is running on ${port}`)
})

app.get('/index',(req,res)=>{
    res.sendFile("templates/index.html",{root: __dirname})
})