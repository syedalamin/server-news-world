const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categoris.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('hellow the news world')
});

app.get('/categoris', (req, res)=>{
    res.send(categories);
})



app.listen(port,()=>{
    console.log(`news world api running port ${port}`)
});











/**
 * require diye akta express touri korte hobe 
 * express e call korte hobe
 * app.get diye akta root  dite hobe tar modde collback function likte hobe 
 * call back function er 2 ta preamiter dite hobe 1 ta req, areak ta res 
 * response diye amar sob kisu pathate pari
 * app take listen korte hobe kono akta port er modde
 * 
 * cors install kora lagbe na hole error dibe
 * corse require kora lagbe
 * corse ke app.use(cors()) function hisebe call kora lagbe use korar junno
 * 
 */