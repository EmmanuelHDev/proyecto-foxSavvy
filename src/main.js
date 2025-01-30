document.addEventListener('DOMContentLoaded', function() {
    
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('contenido-principal');

    
    setTimeout(function() {
        splashScreen.style.opacity = '0'; 
        setTimeout(function() {
            splashScreen.classList.add('hidden'); 
            mainContent.classList.remove('hidden');
        }, 500); 
    }, 3000); 
});
//---------------------------------------//
//variables que manipulan el acceso a la plataforma, btn de crear cuenta y btn de iniciar sesion
//seccion de login
const login = document.getElementById('login');
//btn de crear cuenta
const btnCrearCuenta = document.getElementById('btn-crear_cuenta');

btnCrearCuenta.addEventListener('click', ()=>{ 
    login.classList.add('hidden');
    const crearCuenta_conteiner = document.getElementById('crear-cuenta')
    crearCuenta_conteiner.classList.remove('hidden');
    const veriniciarSesion = document.getElementById('show-iniciarSesion');
    const iniciarSesion_conteiner = document.getElementById('iniciar-sesion')
    veriniciarSesion.addEventListener('click', ()=>{
        crearCuenta_conteiner.classList.add('hidden');
        iniciarSesion_conteiner.classList.remove('hidden');
    })
   

})

//btn de iniciar sesion
const btnIniciarSesion = document.getElementById('btn-iniciar_sesion');

btnIniciarSesion.addEventListener('click', ()=>{
    login.classList.add('hidden');
    const iniciarSesion_conteiner = document.getElementById('iniciar-sesion')
    iniciarSesion_conteiner.classList.remove('hidden');
    const verCrearCuenta = document.getElementById('show-crearCuenta');
    const crearCuenta_conteiner = document.getElementById('crear-cuenta');

    verCrearCuenta.addEventListener('click', ()=>{
        iniciarSesion_conteiner.classList.add('hidden');
        crearCuenta_conteiner.classList.remove('hidden');
    })
})

