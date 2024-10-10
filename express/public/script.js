let p1 =new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.1){
        setTimeout(()=>{

            resolve("accepted")
        },5000)
    }
    else{
        setTimeout(()=>{

            reject("rejected")
        },2000)
    }
})

p1.then((a)=>{
    console.log(a)
}).catch((e)=>{
    console.log(e);
    
})
// console.log('');

// let p1 =new Promise((resolve,reject)=>{
// console.log("promise")
// resolve("shivansh")
// })

// let p1 =new Promise((resolve,reject)=>{

// })
// p1.then((a)=>{
// console.log(a)
// })
