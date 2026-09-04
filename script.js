/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const elementos = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


/* Observar cada elemento */

elementos.forEach(elemento => {

    observer.observe(elemento);

});

// Seleccionamos el botón de 6to Aniversario
const btnAniversario = document.getElementById('btn-aniversario');

if (btnAniversario) {
    btnAniversario.addEventListener('click', () => {
        // Lanzar lluvia de confeti continua durante 3 segundos
        const duracion = 3 * 1000; // 3 segundos
        const fin = Date.now() + duracion;

        (function lanzar() {
            // Lado izquierdo
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFD369', '#d4a373', '#502522', '#ffffff']
            });

            // Lado derecho
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFD369', '#d4a373', '#502522', '#ffffff']
            });

            if (Date.now() < fin) {
                requestAnimationFrame(lanzar);
            }
        })();
    });
}


/* =====================================================
   MENÚ HAMBURGUESA
===================================================== */

const menuToggle =
    document.getElementById("menu-toggle");

const menu =
    document.getElementById("menu");


menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");


    if (menu.classList.contains("active")) {

        menuToggle.innerHTML = "✕";

    } else {

        menuToggle.innerHTML = "☰";

    }

});


/* =====================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
===================================================== */

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});