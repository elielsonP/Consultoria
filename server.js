const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/formulario', (req, res) => {
    console.log('Dados recebido', req.body);
    res.status(200).send({ message: 'Dados recebidos com sucesso!' })
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}');
})