

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
const footerPlataforma = document.getElementById('footer_plataforma');
btnIncio.addEventListener('click', ()=>{
    sectionInicio.classList.remove('hidden');
    sectionTienda.classList.add('hidden');
    sectionRankings.classList.add('hidden');
    sectionPerfil.classList.add('hidden')
    sectionMundo1.classList.add('hidden')
    sectionAmigos.classList.add('hidden')
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
    sectionAmigos.classList.add('hidden')
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
    sectionAmigos.classList.add('hidden')
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
    sectionAmigos.classList.add('hidden')
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
//btn para acceder a la parte de buscar un amigo
const btnBucarAmigo = document.getElementById('btn_buscar-amigos');
const sectionAmigos = document.getElementById('buscar-amigos');

btnBucarAmigo.addEventListener('click', ()=>{
    sectionAmigos.classList.remove('hidden')
    sectionPerfil.classList.add('hidden')
    sectionMundo1.classList.add('hidden')
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
//btn para acceder a los niveles de cada mundo 
//nivel 1
const btnNivel1 = document.getElementById('nivel1');
const sectionCuent0 = document.getElementById('contenedor-cuentos');
//variable para entrar a la seccion de los quices 
const contenedorQuices = document.getElementById('contenedor-quices');
let nextPag =0;
//------------------------------------------------------------------------//
//funcion para acceder a los quices
async function verQuices() {
    try {
        const respuesta = await fetch('asset/cuentos/mundo1/nivel1/quizz.json');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const data = await respuesta.json();

        const preguntaElemento = document.getElementById("Pregunta");
        const contenedorRespuestas = document.querySelector(".contenedor-respuestas");
        const btnSiguiente = document.getElementById("siguientePregunta");
        const barraProgreso = document.querySelector("#barra");
        const validarRespuesta = document.getElementById("validarRespuesta");
        const contenedorquiz = document.querySelector(".contenedor-quiz");
        let indicePregunta = 0;
        let totalPreguntas = data.quizz.length;
        let respuestasUsuario = [];

        // Función para actualizar la barra de progreso
        function actualizarProgreso() {
            let progreso = ((indicePregunta + 1) / totalPreguntas) * 100;
            requestAnimationFrame(() => {
                barraProgreso.style.width = progreso + "%";
            });
        }

        // Función para cargar una pregunta
        function cargarPregunta() {
            let preguntaActual = data.quizz[indicePregunta];

            // Mostrar la pregunta
            preguntaElemento.textContent = preguntaActual.pregunta;

            // Limpiar respuestas anteriores
            contenedorRespuestas.innerHTML = "";

            // Crear botones de opciones
            for (let clave in preguntaActual.opciones) {
                let opcion = preguntaActual.opciones[clave];
                let boton = document.createElement("button");
                boton.classList.add("opcion");
                boton.textContent = `${clave}) ${opcion}`;
                boton.dataset.respuesta = clave; // Guardamos solo la letra (A, B, C)

                boton.addEventListener("click", () => {
                    document.querySelectorAll(".opcion").forEach(btn => btn.classList.remove("seleccionado"));
                    boton.classList.add("seleccionado");

                    // Guardar respuesta del usuario (la letra)
                    respuestasUsuario[indicePregunta] = clave;

                    // Habilitar botón de siguiente
                    btnSiguiente.disabled = false;
                });

                contenedorRespuestas.appendChild(boton);
            }

            // Deshabilitar botón hasta que seleccione respuesta
            btnSiguiente.disabled = true;

            // Actualizar barra de progreso con animación
            actualizarProgreso();
        }

        // Función para mostrar respuestas seleccionadas con la letra
        function mostrarRespuestas() {
            validarRespuesta.innerHTML = "<h3>Respuestas seleccionadas:</h3>";

            data.quizz.forEach((pregunta, index) => {
                let respuestaUsuario = respuestasUsuario[index] || "No respondida";

                let respuestaHTML = `
                    <div>
                        <p id ="pregunta"><strong>${pregunta.pregunta}</strong></p>
                        <p><strong>${respuestaUsuario}</strong></p>
                        <hr>
                    </div>
                    
                `;

                validarRespuesta.innerHTML += respuestaHTML;
            });
             // Crear y agregar botón de verificar solo si no existe
             if (!document.getElementById("btnVerificar")) {
                const btnVerificar = document.createElement("button");
                btnVerificar.textContent = "Verificar respuestas";
                btnVerificar.id = "btnVerificar";
                btnVerificar.addEventListener("click", () => {
                    alert("Aquí podrías mostrar si todas son correctas o incorrectas.");
                });

                validarRespuesta.appendChild(btnVerificar);
            }
        }

        // Evento para avanzar a la siguiente pregunta
        btnSiguiente.addEventListener("click", () => {
            if (indicePregunta < totalPreguntas - 1) {
                indicePregunta++;
                cargarPregunta();
            } else {
                btnSiguiente.style.display = "none"; // Ocultar botón de siguiente
                contenedorquiz.classList.add("hidden"); // Ocultar contenedor de quices
                validarRespuesta.classList.remove("hidden"); // Mostrar respuestas
                mostrarRespuestas();
            }
        });

        // Crear botón para verificar respuestas
        const btnVerificar = document.getElementById('btnVerificar');
        btnVerificar.textContent = "Verificar respuestas";
        btnVerificar.id = "btnVerificar";

        btnVerificar.addEventListener("click", () => {
            alert("Aquí podrías mostrar si todas son correctas o incorrectas.");
        });

        // Cargar la primera pregunta
        cargarPregunta();
    } catch (error) {
        console.error("Error cargando los quices:", error);
    }
}


//funcion para acceder al cuento
async function verCuento() {
    try {
        const respuesta = await fetch('asset/cuentos/mundo1/nivel1/cuento.json'); 
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const data = await respuesta.json();
        console.log(data);
        const btnNext = document.getElementById('haciaDelante');
        const btnPrev = document.getElementById('haciaTras');
        const btnIrQuiz = document.getElementById('ir-quizz');
        const dataImagen = document.getElementById('imagen-cuento');
        const nombreCuento = document.getElementById('nombre-cuento');
        const nivel = document.getElementById('nivel');
        const tituloNivel = document.getElementById('titulo-nivel');
        const ruta = '../asset/cuentos/mundo1/nivel1/';
        dataImagen.style.backgroundImage = `url(${ruta + data.imagenes[0]})`
        nombreCuento.textContent = data.titulo;
        nivel.textContent = data.id;
        tituloNivel.textContent = data.titulo;
        btnNext.addEventListener('click', ()=>{
            nextPag += 1;
            dataImagen.style.backgroundImage = `url(${ruta + data.imagenes[nextPag]})`
            //saber si estamos en la ultima pagina del cuento 
            if(nextPag === data.imagenes.length -1){
                btnNext.classList.add('hidden')
                btnPrev.classList.add('hidden')
                btnIrQuiz.classList.remove('hidden')

            }
        })
        btnPrev.addEventListener('click', ()=>{
            nextPag -= 1;
            dataImagen.style.backgroundImage = `url(${ruta + data.imagenes[nextPag]})`
        })
        btnIrQuiz.addEventListener('click', ()=>{
          contenedorQuices.classList.remove('hidden');  
          sectionCuent0.classList.add('hidden');
          console.log('ir a quices');
          verQuices();
        })
        

    } catch (error) {
        console.error("Error cargando el cuento:", error);
    }
}

btnNivel1.addEventListener('click', ()=>{
    sectionMundo1.classList.add('hidden')
    headerPlataforma.classList.add('hidden')
    footerPlataforma.classList.add('hidden')
    sectionCuent0.classList.remove('hidden')
    verCuento()
})

//------------------------------------------------------------------------//
//btn para salir del cuento

const btnSalirCuento = document.getElementById('btn-salir-cuento');

btnSalirCuento.addEventListener('click', ()=>{
    sectionCuent0.classList.add('hidden')
    headerPlataforma.classList.remove('hidden')
    footerPlataforma.classList.remove('hidden')
    sectionMundo1.classList.remove('hidden')
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