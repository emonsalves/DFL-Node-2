const express = require('express');
const morgan = require("morgan");
const fs = require('fs');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/canciones', (req, res) => {
    const data = JSON.parse(fs.readFileSync(`repertorio.json`, 'utf8'));
    const newData = { id: data.length + 1, ...req.body };
    fs.writeFileSync(`repertorio.json`, JSON.stringify([...data, newData], null, 4))

    res.json({
        message: "Producto creado"
    });
})

app.get('/canciones', (req, res) => {
    res.sendFile('./repertorio.json', {
        root: __dirname
    });
})

app.put('/canciones/:id', (req, res) => {
    const { id } = req.params
    const newData = req.body
    let data = JSON.parse(fs.readFileSync(`repertorio.json`, 'utf8'));

    const dataFound = data.find((e) => e.id === parseInt(id))

    if (!dataFound)
        return res.status(404).json({
            message: "Producto no encontrado"
        })

    data = data.map((e) => e.id === parseInt(id)
        ? { ...e, ...newData }
        : e)

    fs.writeFileSync(`repertorio.json`, JSON.stringify(data, null, 4))

    res.status(202).json({
        message: "Producto actualizado"
    });

})

app.delete('/canciones/:id', (req, res) => {
    const { id } = req.params
    let data = JSON.parse(fs.readFileSync(`repertorio.json`, 'utf8'));

    const dataFound = data.find((e) => e.id === parseInt(id))

    if (!dataFound)
        return res.status(404).json({
            message: "Producto no encontrado"
        })

    data = data.filter((e) => e.id !== parseInt(id))

    fs.writeFileSync(`repertorio.json`, JSON.stringify(data, null, 4))

    res.status(202).json({
        message: "Producto eliminado"
    });
})

app.use((req, res) => {
    res.status(404).send('<h1>Not Found</h1>')
})

app.listen(3000)
console.log(`Server on port ${3000}`)