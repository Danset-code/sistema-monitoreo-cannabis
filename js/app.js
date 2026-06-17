// ======================================
// SISTEMA MONITOREO CULTIVO
// app.js
// ======================================


// ======================================
// DETECTAR PÁGINA ACTUAL
// ======================================

const paginaActual =
    window.location.pathname.split("/").pop();


// ======================================
// MENÚ ACTIVO AUTOMÁTICO
// ======================================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    const texto = item.textContent.trim().toLowerCase();

    if(
        (paginaActual === "index.html" && texto === "dashboard") ||
        (paginaActual === "sensores.html" && texto === "sensores") ||
        (paginaActual === "reportes.html" && texto === "reportes")
    ){

        item.classList.add("active");

    }

});

// =============================
// MENU RESPONSIVE
// =============================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.add("active");

        // Ocultar botón hamburguesa
        menuToggle.style.display = "none";

    });

}
const closeSidebar =
    document.getElementById("closeSidebar");

if(closeSidebar){

    closeSidebar.addEventListener("click", () => {

        sidebar.classList.remove("active");

        // Mostrar nuevamente el botón hamburguesa
        menuToggle.style.display = "block";

    });

}

// ======================================
// NAVEGACIÓN ENTRE PÁGINAS
// ======================================

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const texto =
            item.textContent.trim().toLowerCase();

        if(texto === "dashboard"){

            window.location.href = "index.html";

        }

        if(texto === "sensores"){

            window.location.href = "sensores.html";

        }

        if(texto === "reportes"){

            window.location.href = "reportes.html";

        }

    });

});


// ======================================
// DASHBOARD
// ======================================

if(paginaActual === "index.html"){


    // =========================
    // MODAL CREAR GRÁFICO
    // =========================

    const btnCrearGrafico =
        document.getElementById("btnCrearGrafico");

    const modalCrearGrafico =
        document.getElementById("modalCrearGrafico");

    const cerrarModal =
        document.getElementById("cerrarModal");

    const formularioGrafico =
        document.getElementById("formGrafico");

    const contenedorGraficos =
        document.getElementById("contenedorGraficos");


    // =========================
    // ABRIR MODAL
    // =========================

    if(btnCrearGrafico){

        btnCrearGrafico.addEventListener("click", () => {

            modalCrearGrafico.style.display = "flex";

        });

    }


    // =========================
    // CERRAR MODAL
    // =========================

    if(cerrarModal){

        cerrarModal.addEventListener("click", () => {

            modalCrearGrafico.style.display = "none";

        });

    }


    // =========================
    // CLICK AFUERA DEL MODAL
    // =========================

    window.addEventListener("click", (e) => {

        if(e.target === modalCrearGrafico){

            modalCrearGrafico.style.display = "none";

        }

    });


    // =========================
    // CREAR GRÁFICO
    // =========================

    if(formularioGrafico){

        formularioGrafico.addEventListener("submit", (e) => {

            e.preventDefault();

            const nombreGrafico =
                document.getElementById("nombreGrafico").value;

            const tipoGrafico =
                document.getElementById("tipoGrafico").value;


            // VALIDACIONES

            if(
                nombreGrafico === "" ||
                tipoGrafico === ""
            ){

                alert("Todos los campos son obligatorios");

                return;

            }


            // CREAR TARJETA

            const tarjeta =
                document.createElement("div");

            tarjeta.classList.add("grafico-card");


            tarjeta.innerHTML = `

                <div class="grafico-header">

                    <h3>${nombreGrafico}</h3>

                    <button class="btnEliminar">
                        Eliminar
                    </button>

                </div>

                <div class="grafico-body">

                    <p>
                        Tipo de gráfico:
                        ${tipoGrafico}
                    </p>

                </div>

            `;


            // INSERTAR

            contenedorGraficos.appendChild(tarjeta);


            // LIMPIAR FORMULARIO

            formularioGrafico.reset();


            // CERRAR MODAL

            modalCrearGrafico.style.display = "none";


            // ALERTA

            alert("Gráfico creado correctamente");

        });

    }


    // =========================
    // ELIMINAR GRÁFICOS
    // =========================

    document.addEventListener("click", (e) => {

        if(
            e.target.classList.contains("btnEliminar")
        ){

            const confirmar =
                confirm("¿Desea eliminar el gráfico?");

            if(confirmar){

                const tarjeta =
                    e.target.closest(".grafico-card");

                tarjeta.remove();

            }

        }

    });


    // =========================
    // DATOS EN TIEMPO REAL
    // =========================

    function actualizarSensores(){

        const sensores =
            document.querySelectorAll(".valorSensor");

        sensores.forEach(sensor => {

            const valor =
                Math.floor(Math.random() * 100);

            sensor.textContent = valor;

        });

    }

    setInterval(actualizarSensores, 3000);

}


// ======================================
// REPORTES
// ======================================

if(paginaActual === "reportes.html"){


    // =========================
    // FILTRO REPORTES
    // =========================

    const filtroReporte =
        document.getElementById("filtroReporte");


    if(filtroReporte){

        filtroReporte.addEventListener("keyup", () => {

            const texto =
                filtroReporte.value.toLowerCase();

            const filas =
                document.querySelectorAll(".filaReporte");


            filas.forEach(fila => {

                const contenido =
                    fila.textContent.toLowerCase();

                if(contenido.includes(texto)){

                    fila.style.display = "";

                }else{

                    fila.style.display = "none";

                }

            });

        });

    }


    // =========================
    // EXPORTAR EXCEL
    // =========================

    const btnExportar =
        document.querySelector(".btn-primary");

    if(btnExportar){

        btnExportar.addEventListener("click", () => {

            alert(
                "Reporte exportado correctamente"
            );

        });

    }

}


// ======================================
// SENSORES
// ======================================

if(paginaActual === "sensores.html"){


    // =========================
    // ACTUALIZAR SENSORES
    // =========================

    function actualizarValoresSensores(){

        const sensores =
            document.querySelectorAll(".valorSensor");

        sensores.forEach(sensor => {

            const valor =
                Math.floor(Math.random() * 100);

            if(sensor.textContent.includes("°C")){

                sensor.textContent = valor + "°C";

            }
            else if(sensor.textContent.includes("%")){

                sensor.textContent = valor + "%";

            }
            else{

                sensor.textContent = valor + " ppm";

            }

        });

    }


    setInterval(actualizarValoresSensores, 4000);

}


// ======================================
// SISTEMA CARGADO
// ======================================

window.addEventListener("load", () => {

    console.log(
        "Sistema cargado correctamente"
    );

});