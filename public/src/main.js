

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
// const btnAcceder = document.getElementById('btn-plataforma');
// const sectionPlataforma = document.getElementById('plataforma');

// btnAcceder.addEventListener('click', ()=>{
//     login.classList.add('hidden');
//     sectionPlataforma.classList.remove('hidden');
//     const iniciarSesion_conteiner = document.getElementById('iniciar-sesion')
//     iniciarSesion_conteiner.classList.add('hidden');
// })




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
//funciones para acceder a los cuentos y quices 
// Función para cargar JSON
async function cargarJSON(url) {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return await respuesta.json();
    } catch (error) {
        console.error("Error cargando el JSON:", error);
        return null;
    }
}
//funcion para ver los titulos y niveles de los cuentos
async function verTitulos(rutaCuento, index) {
    const data = await cargarJSON(rutaCuento);
    if (!data) return;
    console.log(data    )
    const nivel = document.getElementById('nivel');
    const tituloNivel = document.getElementById('titulo-nivel');
    nivel.textContent = data.niveles[index].id;
    tituloNivel.textContent = data.niveles[index].titulo;
}

// Función para ver el cuento
async function verCuento(rutaCuento, nivelIndex) {
    const data = await cargarJSON(rutaCuento);
    if (!data) return;

    const nivel = data.niveles[nivelIndex];
    console.log(nivel) // Seleccionamos el nivel correspondiente
    const contenedorCuento = document.getElementById('contenedor-cuento'); // Contenedor del cuento
    const imagenCuento = document.getElementById('imagen-cuento'); // Elemento de la imagen
    const nombreCuento = document.getElementById('nombre-cuento'); // Título del cuento
    const btnNext = document.getElementById('haciaDelante'); // Botón para avanzar al siguiente fragmento del cuento
    const btnPrev = document.getElementById('haciaTras'); // Botón para retroceder al fragmento anterior
    const btnQuizz1 = document.getElementById('ir-quizz1');
    const btnQuizz2 = document.getElementById('ir-quizz2'); // Botón para ver el quizz

    let paginaActual = 0;

    // Mostrar la página actual
    function mostrarPagina() {
        const imagenActual = nivel.imagenes[paginaActual];
        
        // Mostrar el título del cuento y la imagen correspondiente
        nombreCuento.textContent = nivel.titulo; // Aquí puedes agregar más lógica si hay más de un título
        imagenCuento.style.backgroundImage = `url(asset/cuentos/mundo1/${imagenActual})`; // Cambiar la imagen de fondo
         // Mostrar el botón de "Ver el quizz" si estamos en la última página
         if (paginaActual === nivel.imagenes.length - 1) {
            if(nivel.id==='Nivel 1'){
                btnQuizz1.classList.remove('hidden');
                btnQuizz2.classList.add('hidden');
            }else if (nivel.id === 'Nivel 2'){
                btnQuizz2.classList.remove('hidden');
                btnQuizz1.classList.add('hidden');
            }
            btnNext.classList.add('hidden');
            btnPrev.classList.add('hidden');
        } else {
            btnQuizz1.classList.add('hidden');
            btnQuizz2.classList.add('hidden');
        }
        
    }

    // Manejar el avance al siguiente fragmento del cuento
    btnNext.addEventListener('click', () => {
        if (paginaActual < nivel.imagenes.length - 1) {
            paginaActual++;
            mostrarPagina();
        }
    });

    // Manejar el retroceso al fragmento anterior
    btnPrev.addEventListener('click', () => {
        if (paginaActual > 0) {
            paginaActual--;
            mostrarPagina();
        }
    });


    // Mostrar la primera página del cuento
    mostrarPagina();
}
//funcion para ver el quizz
 async function verQuizz(rutaCuento, nivelIndex) {
    let preguntaIndex = 0;
    const data = await cargarJSON(rutaCuento);
    if (!data) return;

    // Cargar las preguntas del nivel correcto
    const nivel = data.niveles[nivelIndex];
    console.log("Nivel cargado:", nivel);  // Verifica que el nivel correcto se está cargando.
    
    // Resetear el índice de pregunta y respuestas

      // Asegúrate de que siempre empieces desde la primera pregunta
    let respuestasUsuario = Array(nivel.quizz.length).fill(null);    // Reinicia las respuestas

    // Variables del DOM
    const contenedorQuizz = document.getElementById('contenedor-quices'); 
    const contenedorquiz = document.querySelector('.contenedor-quiz');
    const contenedorCuento = document.getElementById('contenedor-cuentos'); 
    const barraProgreso = document.getElementById('barra'); 
    const preguntaContainer = document.getElementById('Pregunta'); 
    const opcionesContainer = document.querySelector('.contenedor-respuestas'); 
    const btnSiguiente = document.getElementById('siguientePregunta'); 
    const validarRespuesta = document.getElementById('ValidarResultados');

    // Resetear estado del quiz (se asegura que todo esté limpio)
    function resetearEstadoQuiz() {
        preguntaIndex = 0;  // Reiniciar el índice de las preguntas
        respuestasUsuario = Array(nivel.quizz.length).fill(null);  // Reiniciar las respuestas
        opcionesContainer.innerHTML = '';  // Limpiar las opciones
        preguntaContainer.innerHTML = '';  // Limpiar la pregunta
        barraProgreso.style.width = '0%';  // Reiniciar la barra de progreso
        btnSiguiente.disabled = true;  // Deshabilitar el botón de siguiente
    }

    // Actualizar barra de progreso
    function actualizarBarraProgreso() {
        const progreso = ((preguntaIndex + 1) / nivel.quizz.length) * 100;
        barraProgreso.style.width = `${progreso}%`;
    }

    // Mostrar la pregunta actual
    function mostrarPregunta() {
        console.log("Pregunta index:", preguntaIndex);  // Verifica el índice de pregunta
        const preguntaActual = nivel.quizz[preguntaIndex];
        preguntaContainer.innerHTML = preguntaActual.pregunta;
        opcionesContainer.innerHTML = ''; // Limpia las opciones anteriores

        // Mostrar las opciones de respuesta
        Object.keys(preguntaActual.opciones).forEach(opcion => {
            const botonOpcion = document.createElement('button');
            botonOpcion.classList.add('opcion');
            botonOpcion.textContent = `${opcion}: ${preguntaActual.opciones[opcion]}`;
            botonOpcion.dataset.respuesta = opcion;
            opcionesContainer.appendChild(botonOpcion);

            botonOpcion.addEventListener('click', () => {
                // Si el usuario selecciona una respuesta, habilitamos el botón "Siguiente"
                document.querySelectorAll('.opcion').forEach(boton => boton.classList.remove('seleccionado'));
                botonOpcion.classList.add('seleccionado');
                respuestasUsuario[preguntaIndex] = opcion;
                btnSiguiente.disabled = false;
            });
        });

        btnSiguiente.disabled = true;
        actualizarBarraProgreso();
    }

    // Verificar respuestas
    function verificarRespuestas() {
        let respuestasCorrectas = 0;
        let estrellas = document.querySelectorAll('#estrellas img');
        let recompensaMoneda = document.querySelector(".recompensa-moneda");
        let recompensaExperiencia = document.querySelector(".recompensa-experiencia");
        console.log("Respuestas del quiz: ", respuestasUsuario);
        nivel.quizz.forEach((pregunta, index) => {
            if (pregunta.respuesta_correcta === respuestasUsuario[index]) {
                respuestasCorrectas++;
            }
        });

        // Mostrar las estrellas
        estrellas.forEach(estrella => {
            estrella.style.opacity = "0";
            estrella.style.transform = "scale(0)";
        });

        let cantidadEstrellas = 0;
        if (respuestasCorrectas === nivel.quizz.length) {
            cantidadEstrellas = 3;
            recompensaMoneda.textContent = "100";
            recompensaExperiencia.textContent = "100";
        } else if (respuestasCorrectas >= nivel.quizz.length - 1) {
            cantidadEstrellas = 2;
            recompensaMoneda.textContent = "50";
            recompensaExperiencia.textContent = "50";
        } else {
            cantidadEstrellas = 1;
            recompensaMoneda.textContent = "10";
            recompensaExperiencia.textContent = "10";
        }

        // Animar estrellas
        estrellas.forEach((estrella, index) => {
            setTimeout(() => {
                estrella.style.opacity = index < cantidadEstrellas ? "1" : "0.2";
                estrella.style.transform = "scale(1.5)";
                setTimeout(() => estrella.style.transform = "scale(1)", 300);
            }, index * 700);
        });

        console.log(`Tuviste ${respuestasCorrectas} respuestas correctas de ${nivel.quizz.length} preguntas.`);
    }

    // Evento al hacer clic en el botón "Siguiente"
    btnSiguiente.addEventListener('click', () => {
        // if (preguntaIndex === 6) {
        //     resetearEstadoQuiz(); // Asegura que se resetea antes de avanzar
        //     mostrarPregunta(); 
        // }
    
        if (respuestasUsuario[preguntaIndex] !== null) {
            preguntaIndex++;
            
            console.log("Índice de pregunta después de elegir respuesta: ", preguntaIndex);
            if (preguntaIndex < nivel.quizz.length) {
                mostrarPregunta();
            }else if(preguntaIndex === 6){
                resetearEstadoQuiz();
            }
             else {
                contenedorquiz.classList.add('hidden');
                validarRespuesta.classList.remove('hidden');
                verificarRespuestas();
            }
        }
    });

    // Mostrar el quiz y ocultar el cuento
    contenedorCuento.classList.add('hidden');
    contenedorQuizz.classList.remove('hidden');
    contenedorquiz.classList.remove('hidden');
    validarRespuesta.classList.add('hidden'); // Asegurar que esta sección esté oculta hasta que sea necesaria
    
    // Resetear el estado del quiz antes de mostrar las preguntas
    resetearEstadoQuiz();
    mostrarPregunta(); // Muestra la primera pregunta del quiz actual
}

function resetearEstados() {
    // Ocultar todas las secciones
    // document.getElementById('contenedor-cuentos').classList.add('hidden');
    document.getElementById('contenedor-quices').classList.add('hidden');
    // document.getElementById('contenedor-mundo_1').classList.add('hidden');
    document.getElementById('header_plataforma').classList.remove('hidden');
    document.getElementById('footer_plataforma').classList.remove('hidden');

    // Resetear la visibilidad de botones y estilos
    document.getElementById('ir-quizz1').classList.add('hidden');
    document.getElementById('ir-quizz2').classList.add('hidden');
    document.getElementById('haciaDelante').classList.remove('hidden');
    document.getElementById('haciaTras').classList.remove('hidden');

    // Resetear progreso del cuento
    let imagenCuento = document.getElementById('imagen-cuento');
    let nombreCuento = document.getElementById('nombre-cuento');
    if (imagenCuento) imagenCuento.style.backgroundImage = 'none';
    if (nombreCuento) nombreCuento.textContent = '';

    // Resetear quiz
    document.getElementById('Pregunta').innerHTML = '';
    document.querySelector('.contenedor-respuestas').innerHTML = '';
    document.getElementById('barra').style.width = '0%';

    // Ocultar la pantalla de resultados del quiz
    document.getElementById('ValidarResultados').classList.add('hidden');
}
//entrar al quizz
const btnQuizz1 = document.getElementById('ir-quizz1');
const btnQuizz2 = document.getElementById('ir-quizz2');
//ruta del json
const ruta = 'asset/cuentos/mundo1/data.json'
// btn para acceder al mundo 1 
const btnMundo1 = document.getElementById('btn-mundo1')
const sectionMundo1 = document.getElementById('contenedor-mundo_1')
let indext =0;

btnMundo1.addEventListener('click', ()=>{
    sectionMundo1.classList.remove('hidden')
    sectionInicio.classList.add('hidden')
    verTitulos(ruta,indext);
    indext++;
})

const nivel1 = document.getElementById('nivel1')
const contenedorCuento = document.getElementById('contenedor-cuentos');
const contenedorQuizz = document.getElementById('contenedor-quices'); 
nivel1.addEventListener('click', ()=>{
    resetearEstados();
    sectionMundo1.classList.add('hidden')
    contenedorCuento.classList.remove('hidden')
    headerPlataforma.classList.add('hidden')
    footerPlataforma.classList.add('hidden')

    //ejecutar la funcion para ver el cuento 
    verCuento(ruta, 0);  // Aquí pasa el nivelIndex
    btnQuizz1.addEventListener('click',()=>{
        verQuizz(ruta, 0)
    });
})

//nivel 2
const nivel2 = document.getElementById('nivel2')
nivel2.addEventListener('click', ()=>{
    resetearEstados();
    sectionMundo1.classList.add('hidden')
    contenedorCuento.classList.remove('hidden')
    headerPlataforma.classList.add('hidden')
    footerPlataforma.classList.add('hidden')

    //ejecutar la funcion para ver el cuento 
    verCuento(ruta,1);  // Aquí pasa el nivelIndex
     // Elimina el evento previo
    btnQuizz2.addEventListener('click',()=>{
        verQuizz(ruta, 1)
    });
})

//funcion para avanzar de nivel

function actualizarNiveles() {
        let nivelActual = 1; // Empezamos en el nivel 1
        const totalNiveles = 5; // Cantidad total de niveles (ajustar según tu juego)
        for (let i = 1; i <= totalNiveles; i++) {
            const nivel = document.getElementById(`nivel${i}`);
            const icono = nivel.querySelector('.icono');

            if (nivel) {
                if (i === nivelActual) {
                    // Nivel actual -> Dorado
                    nivel.style.backgroundColor = "gold";
                    icono.style.backgroundImage = 'url(asset/icon/gancho.svg)';
                } else if (i === nivelActual + 1) {
                    // Siguiente nivel -> Azul
                    nivel.style.backgroundColor = "#ADDDF3";
                    icono.style.opacity=1;
                    icono.style.backgroundImage = 'url(asset/icon/book.svg)';
                    nivel.classList.remove("bloqueado"); // Desbloquear
                } else {
                    // Niveles bloqueados (sin cambios)
                    nivel.style.backgroundColor = "#D9D9D9";
                    icono.style.backgroundImage = 'url(asset/icon/lock.svg)';
                }
            }
        }
}



//avanzar de nivel 
const avanzarNivel = document.getElementById('avanzarNivel');
avanzarNivel.addEventListener('click', ()=>{
    let nivelActual = 1; // Empezamos en el nivel 1
    const totalNiveles = 5;
    if (nivelActual < totalNiveles) {
        nivelActual++;
        actualizarNiveles();
    }
    contenedorQuizz.classList.add('hidden')
    headerPlataforma.classList.remove('hidden')
    footerPlataforma.classList.remove('hidden')
    sectionMundo1.classList.remove('hidden')
})



//btn para salir del cuento
const btnSalirCuento = document.getElementById('btn-salir-cuento')
btnSalirCuento.addEventListener('click', ()=>{
    sectionMundo1.classList.remove('hidden')
    contenedorCuento.classList.add('hidden')
    headerPlataforma.classList.remove('hidden')
    footerPlataforma.classList.remove('hidden')
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