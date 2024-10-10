// const fs=require("fs")
const fs=require("fs/promises")


// console.log("starting")

// fs.writeFileSync("shiv.pdf","shivansh",()=>{
//     console.log("done")
// })
// fs.appendFileSync("shiv.pdf", " shukla", ()=>{
//     console.log(" appended")
// })

// console.log("ending")

// fs.readFile("shiv.pdf",(error,data)=>{
//     console.log(data.toString())
// })
// let a=fs.readFileSync("shiv.pdf")
// console.log(a.toString())
async function na() {
    
    let b= await fs.readFile("./files/shiv.pdf");
    
    console.log(b.toString());
}
na()