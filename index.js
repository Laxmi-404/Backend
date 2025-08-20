// console.log("Laxmi and uske codes")
require('dotenv').config();
const express=require("express") ;
const app=express();
const port=4000;
app.get("/",(req,res)=>
{
    res.send("hello World");
})
app.get('/twitter',(req,res)=>{
    res.send('laxmidotcom');
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>Hello Laxmi! kessi ho?</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on the port ${port}`);
})
