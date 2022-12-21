const express = require('express');
const morgan = require("morgan");
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const archivo = path.join(__dirname, '/public/repertorio.json');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



app.get('/canciones', (req, res) => {
    res.sendFile('./public/repertorio.json', {
        root: __dirname
    });
})


app.post('/canciones', (req, res) => {
    const data = JSON.parse(fs.readFileSync(archivo), 'utf8');
    const newData = { id: Math.floor(Math.random() * 9999), ...req.body };
    fs.writeFileSync(archivo, JSON.stringify([...data, newData], null, 2))

    res.json({
        message: "cancion registrada"
    });
})


app.put('/canciones/:id', (req, res) => {
    const { id } = req.params
    const newData = req.body
    let data = JSON.parse(fs.readFileSync(archivo), 'utf8');

    const dataFound = data.find((e) => e.id === parseInt(id))

    if (!dataFound)
        return res.status(404).json({
            message: "cancion no encontrada"
        })

    data = data.map((e) => e.id === parseInt(id)
        ? { ...e, ...newData }
        : e)

    fs.writeFileSync(archivo, JSON.stringify(data, null, 4))

    res.status(202).json({
        message: "cancion actualizada"
    });

})


app.delete('/canciones/:id', (req, res) => {
    const { id } = req.params
    let data = JSON.parse(fs.readFileSync(archivo), 'utf8');

    const dataFound = data.find((e) => e.id === parseInt(id))

    if (!dataFound)
        return res.status(404).json({
            message: "cancion no encontrada"
        })

    data = data.filter((e) => e.id !== parseInt(id))

    fs.writeFileSync(archivo, JSON.stringify(data, null, 4))

    res.status(202).json({
        message: "cancion eliminada"
    });
})

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.status(404).send('<h1>Not Found</h1>')
})

app.listen(3000)
console.log(`Server on port ${3000}`)