const express = require ('express')
const app = express()

app.get('/',function(req,res){
    res.send('hello word')
})
app.post('/help',function(req,res){
    res.send('hello word may i help u')
})

app.post('/message',function(req,res){
    res.json({'message':"this is a json format !"})
});
app.listen(3000)