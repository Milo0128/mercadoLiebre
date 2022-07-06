const { setMaxListeners } = require('events');
const express = require('express');

const app = express();
const path =require('path');
const publicPath = path.resolve(__dirname,"./public")

app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
})


app.listen (3000, () => {
    console.log('servidor iniciado en: http://localhost:3000');
});