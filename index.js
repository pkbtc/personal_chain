const express=require('express');
const Blockchain=require('./blockchain');

const app=express();
app.use(express.json());
const blockchain=new Blockchain();

app.get('/api/blocks',(req,res)=>{
    res.json(blockchain.chain);
})

app.post('/api/mine',(req,res)=>{
    const {data}=req.body;
    blockchain.addBlock({data:data});
    res.redirect('/api/blocks')

})





app.listen(3000,()=>console.log("listening on port 3000"));