const express = require('express')
const fs = require('fs')

const app = express()

app.post('/canciones', (req, res) => {
    console.log(`recibe datos de cancion y agrega al repertorio`)
})

app.get('/canciones', (req, res) => {
    console.log(`Devuelve un JSON con las canciones registradas en el repertorio`)
})

app.put('/canciones/:id', (req, res) => {
    console.log(`Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local.`)
    const { id } = req.params
    console.log(id)
})

app.delete('/canciones/:id', (req, res) => {
    console.log(`Recibe por queryString el id de una canción y la elimina del repertorio.`)
    const { id } = req.params
    console.log(id)
})

app.use((req, res) => {
    res.status(404).send('<h1>Not Found</h1>')
})

app.listen(3000)
console.log(`Server on port ${3000}`)