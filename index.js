// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/mensajejs', (req, res) => {
  res.send('Hola Mundo desde Node.js');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});