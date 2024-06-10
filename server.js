const express = require('express')

const app = express()
app.listen (8000, ()=> {
    console.log('servidor escuchando en el puerto 8000')
})