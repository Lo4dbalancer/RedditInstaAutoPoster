const express = require('express');
const { serverCheck, sendToInstagram } = require('./controllers');

const app = express()

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({limit: '16kb',extended: true}))

app.get('/',serverCheck)
app.post('/',sendToInstagram)

module.exports =  { app }