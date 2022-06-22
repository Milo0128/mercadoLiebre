const express = require('express');

const app = express();
const path =require('path');

app.use(express.static('public'));


app.listen (3000, () => {
    console.log('servidor iniciado en: http://localhost:3000');
});