gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    initAboutAnimations();
});

function initAboutAnimations() {
    const section = document.querySelector(".about-section");
    const heroTitle = document.querySelector(".hero-title");
    
    if (!section) return;

    // TL 1: Fijar la sección y controlar la desintegración/desvanecimiento del título principal
    const introTl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",      // Empieza justo cuando la sección toca el tope superior
            end: "+=100%",         // Dura el equivalente a un despliegue de pantalla completo
            pin: true,             // Congela la pantalla mientras ocurre la magia
            scrub: 1,              // Suavizado del movimiento atado al dedo/rueda del mouse
        }
    });

    introTl.to(heroTitle, {
        opacity: 0,
        scale: 1.5,                // El texto se expande majestuosamente hacia el usuario
        ease: "power2.inOut"
    })
    .from(".about-content", {
        opacity: 0,
        y: 100,                    // La grilla editorial sube desde abajo de forma sutil
        ease: "power2.out"
    }, "-=0.3");                   // Se superpone un poco con la desaparición del título

    // TL 2: Animación independiente para las imágenes (Efecto Parallax y Entrada Dinámica)
    gsap.fromTo(".img-one img", 
        { yPercent: -15 },
        {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-content",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );

    gsap.fromTo(".img-two img", 
        { yPercent: 10 },
        {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-content",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );
}
