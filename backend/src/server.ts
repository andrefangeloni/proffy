import express from 'express';

const app = express();
app.use(express.json());

app.post('/users', (req, res) => res.send({ message: 'Acessou a rota' }));

app.listen(3333);
