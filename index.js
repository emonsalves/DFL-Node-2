const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const dataJson = path.join(__dirname, '/public/repertorio.json');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//levanto la carpeta public completa con index
app.use(express.static(path.join(__dirname, 'public')))

app.get('/canciones', (req, res) => res.sendFile(dataJson))

app.post('/canciones', (req, res) => {
    const songs = JSON.parse(fs.readFileSync(dataJson), 'utf8');
    const newSong = { ...req.body, id: Math.floor(Math.random() * 9999) };
    fs.writeFileSync(dataJson, JSON.stringify([...songs, newSong], null, 2))

    res.status(201).json({
        message: "Cancion registrada"
    });
})

app.put('/canciones/:id', (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(404).json({
            message: "Error no hay ID definida"
        })
    }

    const newSong = req.body
    let songs = JSON.parse(fs.readFileSync(dataJson), 'utf8');
    const foundSong = songs.find((song) => song.id === parseInt(id))

    if (!foundSong)
        return res.status(404).json({
            message: "Cancion no encontrada"
        })

    songs = songs.map((song) => song.id === parseInt(id)
        ? { ...song, ...newSong }
        : song)

    fs.writeFileSync(dataJson, JSON.stringify(songs, null, 2))

    res.status(202).json({
        message: "Cancion actualizada"
    });

})


app.delete('/canciones/:id', (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(404).json({
            message: "Error no hay ID definida"
        })
    }

    let songs = JSON.parse(fs.readFileSync(dataJson), 'utf8');

    const foundSong = songs.find((song) => song.id === parseInt(id))

    if (!foundSong)
        return res.status(404).json({
            message: "Cancion no encontrada"
        })

    songs = songs.filter((song) => song.id !== parseInt(id))

    fs.writeFileSync(dataJson, JSON.stringify(songs, null, 2))

    res.status(202).json({
        message: "Cancion eliminada"
    });
})

// se deja abajo o corta el proceso
app.use((req, res) => {
    res.status(404).send('<h1>Not Found</h1>')
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        throw error
    }
    console.log(`Server on port ${PORT}`)
});