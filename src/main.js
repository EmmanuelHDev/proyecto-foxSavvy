

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
//---------------------------------------//
//btn para acceder a la plataforma 
const btnAcceder = document.getElementById('btn-plataforma');
const sectionPlataforma = document.getElementById('plataforma');

btnAcceder.addEventListener('click', ()=>{
    login.classList.add('hidden');
    sectionPlataforma.classList.remove('hidden');
    const iniciarSesion_conteiner = document.getElementById('iniciar-sesion')
    iniciarSesion_conteiner.classList.add('hidden');
})




//--------------------------------------------//
//btn para navegar por el plataformorma
const btnIncio = document.getElementById('btn-inicio');
const sectionInicio = document.getElementById('contenedor-temarios');

const btnTienda = document.getElementById('btn-tienda');
const sectionTienda = document.getElementById('contenedor-tienda');

const btnRankings = document.getElementById('btn-analisis')
const sectionRankings = document.getElementById('contenedor-rankings')

const btnPefil = document.getElementById('btn-perfil');
const sectionPerfil = document.getElementById('contenedor-perfil')

const headerPlataforma = document.getElementById('header_plataforma');
btnIncio.addEventListener('click', ()=>{
    sectionInicio.classList.remove('hidden');
    sectionTienda.classList.add('hidden');
    sectionRankings.classList.add('hidden');
    sectionPerfil.classList.add('hidden')
    sectionMundo1.classList.add('hidden')
    const btnIncionFill = document.getElementById('btn-inicio-fill')
    const btnTiendaFill = document.getElementById('btn-tienda-fill')
    const btnAnalisisFill = document.getElementById('btn-analisis-fill')
    const btnPerfilFill = document.getElementById('btn-perfil-fill')
    btnTiendaFill.setAttribute('fill', 'black')
    btnAnalisisFill.setAttribute('fill', 'black')
    btnPerfilFill.setAttribute('fill', 'black')
    btnIncionFill.setAttribute('fill', '#FC850E')
    headerPlataforma.classList.remove('hidden')


})
btnTienda.addEventListener('click', ()=>{
    sectionInicio.classList.add('hidden');
    sectionRankings.classList.add('hidden');
    sectionPerfil.classList.add('hidden')
    sectionTienda.classList.remove('hidden');
    sectionMundo1.classList.add('hidden')
    const btnIncionFill = document.getElementById('btn-inicio-fill')
    const btnTiendaFill = document.getElementById('btn-tienda-fill')
    const btnAnalisisFill = document.getElementById('btn-analisis-fill')
    const btnPerfilFill = document.getElementById('btn-perfil-fill')
    btnIncionFill.setAttribute('fill', 'black')
    btnAnalisisFill.setAttribute('fill', 'black')
    btnPerfilFill.setAttribute('fill', 'black')
    btnTiendaFill.setAttribute('fill', '#FC850E')
    headerPlataforma.classList.remove('hidden')
})

btnRankings.addEventListener('click', ()=>{
    sectionInicio.classList.add('hidden');
    sectionTienda.classList.add('hidden');
    sectionPerfil.classList.add('hidden')
    sectionRankings.classList.remove('hidden');
    sectionMundo1.classList.add('hidden')
    const btnIncionFill = document.getElementById('btn-inicio-fill')
    const btnTiendaFill = document.getElementById('btn-tienda-fill')
    const btnAnalisisFill = document.getElementById('btn-analisis-fill')
    const btnPerfilFill = document.getElementById('btn-perfil-fill')
    btnIncionFill.setAttribute('fill', 'black')
    btnAnalisisFill.setAttribute('fill', '#FC850E')
    btnPerfilFill.setAttribute('fill', 'black')
    btnTiendaFill.setAttribute('fill', 'black')
    headerPlataforma.classList.remove('hidden')
})

btnPefil.addEventListener('click', ()=>{
    sectionInicio.classList.add('hidden');
    sectionTienda.classList.add('hidden');
    sectionRankings.classList.add('hidden')
    sectionPerfil.classList.remove('hidden');
    sectionMundo1.classList.add('hidden')
    const btnIncionFill = document.getElementById('btn-inicio-fill')
    const btnTiendaFill = document.getElementById('btn-tienda-fill')
    const btnAnalisisFill = document.getElementById('btn-analisis-fill')
    const btnPerfilFill = document.getElementById('btn-perfil-fill')
    btnIncionFill.setAttribute('fill', 'black')
    btnAnalisisFill.setAttribute('fill', 'black')
    btnPerfilFill.setAttribute('fill', '#FC850E')
    btnTiendaFill.setAttribute('fill', 'black')
    headerPlataforma.classList.add('hidden')
})
//------------------------------------------------------------------------//
//btns para acceder a los mundos
const btnMundo1 = document.getElementById('btn-mundo1')
const btnMundo2 = document.getElementById('btn-mundo2')
const btnMundo3 = document.getElementById('btn-mundo3')
//seciones de los mundos 
const sectionMundo1 = document.getElementById('contenedor-mundo_1');

btnMundo1.addEventListener('click', ()=>{
    sectionInicio.classList.add('hidden');
    sectionMundo1.classList.remove('hidden')
    sectionAmigos.classList.add('hidden')
})

//------------------------------------------------------------------------//
//btn para acceder a la parte de buscar un amigo
const btnBucarAmigo = document.getElementById('btn_buscar-amigos');
const sectionAmigos = document.getElementById('buscar-amigos');

btnBucarAmigo.addEventListener('click', ()=>{
    sectionAmigos.classList.remove('hidden')
    sectionPerfil.classList.add('hidden')
    sectionMundo1.classList.add('hidden')
})
//----------------------------------------------------------------------//
//Grafica de los dias de uso 
// Configuración del gráfico

const options = {
    chart: {
      type: 'bar', // Tipo de gráfico (línea, barra, etc.)
      height: 245,  // Altura del gráfico
    },
    series: [{
      name: 'Horas',
      data: [3, 5, 4.8, 6, 7, 9, 1], // Datos del gráfico
    }],
    xaxis: {
      categories: ['Lun', 'Mar', 'Mir', 'Jue', 'Vie', 'Sab', 'Dom',], // Etiquetas del eje X
    },
  };

  // Crear el gráfico
  const chart = new ApexCharts(document.querySelector(".grafica"), options);
  chart.render();