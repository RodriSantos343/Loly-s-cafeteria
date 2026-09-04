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

const btnAniversario = document.getElementById('btn-aniversario');

if (btnAniversario) {
    btnAniversario.addEventListener('click', () => {
        
        // 1. CREAR Y MOSTRAR EL GLOBO CON EL NÚMERO 6
        const globo = document.createElement('div');
        globo.classList.add('globo-aniversario');
        globo.textContent = '6';
        document.body.appendChild(globo);

        // Eliminar el nodo del DOM cuando termine la animación (4s)
        setTimeout(() => {
            globo.remove();
        }, 4000);

        // 2. LLUVIA DE CONFETI DE 3 SECUNDOS
        const duracion = 3 * 1000;
        const fin = Date.now() + duracion;

        (function lanzarConfeti() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFD369', '#d4a373', '#502522', '#ffffff']
            });

            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFD369', '#d4a373', '#502522', '#ffffff']
            });

            if (Date.now() < fin) {
                requestAnimationFrame(lanzarConfeti);
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