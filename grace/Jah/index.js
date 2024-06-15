const http = require ("http")
const PORT = 9090

const server = http.createServer((req,res)=>{
    try{
    res.setHeader("200",{"content-type":"text/plain"})
    res.end("WELCOME TO SOUTH-AFRICA");
    }catch(error){
        console.log(err.message);
    }
})

server.listen(PORT,()=>{
    console.log(`server on ${PORT}`);
})