// const express = require ("express")
// const app = express()
// const PORT = 3232


// app.get("/", (req,res)=>{
//     try{
//     res.send('GOD IS THE GREATEST')
//     }catch(error){
//         console.log(err.message);
//     }
// })

app.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`);
})