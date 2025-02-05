document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  // Asegurar que se envía como JSON
        },
        body: JSON.stringify({ email, password }) // Convertir a JSON
    });

    const data = await response.json();

    if (data.success) {
        alert('Inicio de sesión exitoso');
        document.getElementById('iniciar-sesion').classList.add('hidden');
        document.getElementById('plataforma').classList.remove('hidden');
        // Actualizar los datos del usuario en el header
        document.querySelector('.user_name').textContent = data.user.nombre;
        document.querySelector('.nombrePerfil').textContent = data.user.nombre;
        document.getElementById('puntos_racha').textContent = data.user.racha;
        document.getElementById('puntos_monedas').textContent = data.user.monedas;
        document.querySelector('.monedas_perfil').textContent = data.user.monedas;
        document.querySelector('.puntos_experiencia-perfil').textContent = data.user.experiencia;
        document.querySelector('.puntos_experiencia').textContent = data.user.experiencia;
        document.getElementById('cantidad_amigos').textContent = data.user.amigos;
    } else {
        alert('Error: ' + data.message);
    }
});

