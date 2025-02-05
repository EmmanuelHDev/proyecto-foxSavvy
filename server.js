const express = require('express');
const path = require('path');
const mysql = require('mysql2'); // Requiere el paquete mysql2nod

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//inisiar sesion 
// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  console.log('🔹 Datos recibidos:', req.body);

  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Faltan datos' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
        console.error('⛔ Error en MySQL:', err);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    if (results.length === 0) {
        return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
    }

    const user = results[0];

    console.log('🔑 Comparando:', password, 'con', user.password_hash);

    if (password !== user.password_hash) {
        return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
    }

    const userData = {
        id: user.id_usuario,
        nombre: user.nombre_usuario,
        racha: user.racha_dias,
        monedas: user.monedas,
        experiencia: user.puntos,
        amigos: user.amigos
    };
    console.log(userData);
    
    // Aquí solo enviamos una respuesta con los datos del usuario
    return res.json({ success: true, user: userData });
});
});









// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://192.168.0.15:${port}`);
});
