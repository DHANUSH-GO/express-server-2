const express= require('express')

const app=express()

app.get('/',function(req,res){
    res.end('Homepage');
})

app.get('/contact-us', function(req,res){
    res.end('you can contact me using email')
})
app.post('/tweets',function(req,res){
res.status(201).end('tweet created')
})

app.listen(8000,()=>console.log('server on port 8000'))