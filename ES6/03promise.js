new Promise((resove,reject)=>{
    reject(1)
}).then((data)=>{
    console.log(data)
   return 2
},(data)=>{
    console.log(data)
   return 3
}).then((data)=>{
    console.log(data)
},(data)=>{
    console.log(data)
})