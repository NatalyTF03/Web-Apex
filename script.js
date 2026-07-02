(function () {
  'use strict';

  // Forzar bloqueo de scroll al arrancar para evitar que el usuario se mueva durante la animación
  document.documentElement.classList.add('scroll-lock');
  document.body.classList.add('scroll-lock');

  const mask   = document.querySelector('#transition-mask');
  const swoosh = document.querySelector('.mask-swoosh');
  const title  = document.querySelector('#mask-title');

  /* ─── Desbloquear scroll al terminar la animación ─── */
  function unlockScroll() {
    document.documentElement.classList.remove('scroll-lock');
    document.body.classList.remove('scroll-lock');
  }

  /* ─── Ocultar máscara por completo ─── */
  function hideMask() {
    if (!mask) return;
    gsap.set(mask, { display: 'none', visibility: 'hidden', pointerEvents: 'none', zIndex: 0 });
    unlockScroll();
  }

  /* ─── Inicialización y Secuencia de Animación ─── */
  function initLoader() {
    if (!mask || !swoosh || !title || !window.gsap) {
      hideMask();
      return;
    }

    // Configuración de protección por si algo falla
    const failsafe = setTimeout(() => hideMask(), 6000);

    // Split de caracteres manual para "SIMRACING"
    const rawTitleText = title.textContent.trim();
    title.innerHTML = Array.from(rawTitleText)
      .map(letter => `<span data-char="${letter}">${letter}</span>`)
      .join('');
    
    const letters = title.querySelectorAll('span');

    // Estado base controlado por GSAP antes del inicio
    gsap.set(mask, { display: 'block', visibility: 'visible', clipPath: 'inset(0% 0% 0% 0%)' });
    gsap.set(swoosh, { yPercent: 100 });
    gsap.set(title, { opacity: 1, y: '0vh' }); 
    gsap.set(letters, { y: '32vh', '--fill-a': 1, '--ol-opacity': 0, '--ol-trim': '0%' });

    // --- Línea de tiempo principal ---
    const mainTl = gsap.timeline();

    // 1. Las letras suben fluidamente desde abajo
    mainTl.to(letters, {
      y: '0vh',
      duration: 0.8,
      ease: 'power4.out',
      stagger: 0.04
    });

    // 2. Transición hacia arriba (Efecto salida aérea)
    mainTl.add(() => {
      const exitTl = gsap.timeline();

      // Muestra contornos sutiles
      exitTl.to(letters, {
        '--ol-opacity': 1,
        '--ol-trim': '100%',
        duration: 0.15,
        stagger: 0.02
      }, 0);

      // Despegan las letras verticalmente
      exitTl.to(letters, {
        y: '-70vh',
        '--fill-a': 0,
        duration: 0.9,
        stagger: 0.03,
        ease: 'expo.inOut'
      }, 0);

      // El swoosh gris y la máscara negra suben coordinados revelando el Hero
      exitTl.to(swoosh, { yPercent: 0, duration: 0.5, ease: 'power2.out' }, 0.1);
      exitTl.to(mask, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8, ease: 'power2.inOut' }, 0.5);
      exitTl.to(swoosh, { yPercent: -220, duration: 0.8, ease: 'power2.inOut' }, 0.5);

      // Limpieza final
      exitTl.call(() => {
        clearTimeout(failsafe);
        hideMask();
      });
    }, '+=0.4'); // Tiempo de espera leyendo "SIMRACING" antes de levantarse
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader);
  } else {
    initLoader();
  }
})();

/* ============================================================
   CONTROL INTERACTIVO DEL NAVBAR (Scroll dinámico)
   ============================================================ */
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============================================================
// ANIMACIÓN DE PALABRAS EN SEPARADOR
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const wordElement = document.getElementById("changing-word");
  
  if (wordElement) {
    // Lista de palabras que irán rotando
    const words = ["PROFESIONAL", "LEYENDA", "CAMPEÓN", "ATLETA"];
    let currentIndex = 0;

    function changeWord() {
      // 1. Desvanecer palabra actual hacia abajo
      wordElement.classList.add("fade");

      // 2. Esperar que termine el fade-out (250ms) para cambiar el texto
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        wordElement.textContent = words[currentIndex];
        
        // 3. Quitar la clase para que aparezca la nueva palabra con fade-in
        wordElement.classList.remove("fade");
      }, 250);
    }

    // Cambia cada 3000 milisegundos (3 segundos)
    setInterval(changeWord, 3000);
  }
});


// ============================================================
// MAPA INTERACTIVO: HOVER DEL SIMULADOR
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const circleTriggers = document.querySelectorAll(".circle-trigger");

  circleTriggers.forEach(trigger => {
    // Capturamos el número de botón asignado en el HTML (1, 2, 3 o 4)
    const targetId = trigger.getAttribute("data-target");
    const correspondingFeature = document.getElementById(`feature-${targetId}`);

    if (correspondingFeature) {
      // Cuando el mouse entra al botón circular
      trigger.addEventListener("mouseenter", () => {
        correspondingFeature.classList.add("is-active");
      });

      // Cuando el mouse sale del botón circular
      trigger.addEventListener("mouseleave", () => {
        correspondingFeature.classList.remove("is-active");
      });
    }
  });
});
