const express = require('express');
const path = require('path');
const mysql = require('mysql2'); // Requiere el paquete mysql2

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',   // o la IP del servidor MySQL si no está en la misma máquina
  user: 'root',        // Tu usuario de MySQL
  password: 'HUEvos11',  // Tu contraseña de MySQL
  database: 'db_foxsavvy'  // Nombre de la base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://192.168.0.15:${port}`);
});
