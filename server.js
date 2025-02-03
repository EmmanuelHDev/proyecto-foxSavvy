const express = require('express');
const path = require('path'); // Agregar esta línea

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://192.168.0.15:${port}`);
});
