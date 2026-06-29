/* ============================================================
   VARIABLES GLOBALES Y CONFIGURACIÓN
   ============================================================ */
:root {
  --brand-font: "Anton", sans-serif;
  --title-weight: 400;
  --title-letter: 0.02em;
  --title-size: 18vw; 
  --title-lh: 0.95;

  /* Colores del ecosistema */
  --clr-black: #09090b;
  --clr-white: #ffffff;
  --clr-lime: #C8FF00;
  --clr-lime-dim: rgba(200, 255, 0, 0.18);
  --clr-gray: rgba(255, 255, 255, 0.62);
  --c-swoosh: #111;
}

/* Reset de márgenes */
*, *::before, *::after { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}

html, body {
  width: 100%;
  height: 100%;
  background: var(--clr-black);
  color: var(--clr-white);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* Bloqueo de scroll nativo inicial para la animación */
html.scroll-lock, body.scroll-lock {
  overflow: hidden !important;
  height: 100vh !important;
}

/* ============================================================
   TRANSITION MASK (Loader de entrada)
   ============================================================ */
#transition-mask {
  position: fixed;
  inset: 0;
  z-index: 9999; /* Por encima de todo, incluido el Navbar */
  background: #000000;
  overflow: hidden;
  pointer-events: none;
  clip-path: inset(0% 0% 0% 0%);
}

#mask-title {
  position: absolute;
  inset: 0;
  width: 100%;
  font-family: var(--brand-font);
  font-weight: var(--title-weight);
  letter-spacing: var(--title-letter);
  font-size: var(--title-size);
  line-height: var(--title-lh);
  color: var(--clr-white);
  text-transform: uppercase;
  z-index: 91;
  white-space: nowrap;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8vh;
}

#mask-title span {
  display: inline-block;
  position: relative;
  transform: translateY(32vh);
  will-change: transform, opacity;
  color: rgb(255 255 255 / var(--fill-a, 1));
  --fill-a: 1;
  --ol-opacity: 0;
  --ol-trim: 0%;
}

#mask-title span::after {
  content: attr(data-char);
  position: absolute;
  inset: 0;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.95);
  opacity: var(--ol-opacity);
  clip-path: inset(calc(100% - var(--ol-trim)) 0 0 0);
}

.mask-swoosh {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 35vh;
  background: var(--c-swoosh);
  z-index: 92;
  transform: translateY(100%);
}

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 85px;
  transition: background-color 0.3s ease, padding 0.3s ease;
  background-color: transparent;
  z-index: 1000; 
}

.navbar.scrolled {
  background-color: rgba(9, 9, 11, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 85px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  display: inline-block;
  height: 32px;      
  width: 120px;      
  background-image: url("assets/logo.png"); 
  background-size: contain;    
  background-repeat: no-repeat; 
  background-position: center;    
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: var(--clr-white); /* Corregido: antes negro sobre negro */
  font-weight: 700;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 0.05em;
  font-size: 15px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--clr-lime);
}

/* ============================================================
   DROPDOWN (Corregido y alineado)
   ============================================================ */

/* 1. Le avisamos al contenedor padre que es el punto de referencia */
.nav-links li.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  /* Se despliega justo donde termina el texto del padre */
  top: 100%; 
  /* Lo alineamos al borde izquierdo de la palabra TORNEOS */
  left: 0;   
  background-color: #0f0f12;
  border: 1px solid rgba(255, 255, 255, 0.1);
  list-style: none;
  padding: 10px 0;
  min-width: 170px;
  z-index: 1100;
  
  /* ESPACIO DE SEGURIDAD (Invisible): 
     Agrega un pequeño margen arriba para que el mouse pueda pasar 
     del botón al menú sin que se detecte un "hueco vacío" y se cierre. */
  margin-top: 5px; 
}

/* Evita que se cierre el menú si hay un espacio de pixeles entre el Nav y el Dropdown */
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background: transparent;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 8px 20px;
  text-align: left; /* Asegura que los textos del submenú se alineen a la izquierda */
}

.dropdown-menu a {
  color: var(--clr-gray);
  font-size: 14px;
  display: block; /* Hace que todo el renglón sea clicleable con el mouse */
  width: 100%;
}

.dropdown-menu a:hover {
  color: var(--clr-lime);
}

/* Botón Inscripción */
.cta a {
  background-color: black;
  color: var(--clr-white);
  padding: 10px 24px;
  border: 2px solid var(--clr-lime);
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: background-color 0.3s, color 0.3s;
}

.cta a:hover {
  background-color: var(--clr-lime);
  color: #000;
  box-shadow: 0 0 15px var(--clr-lime);
}

/* ============================================================
   HERO SECTION
   ============================================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 10;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url("assets/fondoheroconhueco.png");
  background-size: cover;          
  background-position: center right; 
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    100deg,
    rgba(9, 9, 11, 0.95) 0%,    
    rgba(9, 9, 11, 0.70) 50%,   
    rgba(9, 9, 11, 0.20) 100%   
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 130px;
  display: flex;          
  align-items: center;   
  justify-content: space-between; 
  gap: 50px;
}

.hero-text {
  flex: 1;
  max-width: 680px; 
}

.hero-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  font-size: clamp(55px, 7vw, 150px);
  line-height: 0.85;       
  letter-spacing: -0.02em; 
  text-transform: uppercase;
  color: var(--clr-white);
  margin-bottom: 15px;
}

.hero-body {
  font-size: clamp(15px, 1.2vw, 18px);
  font-weight: 400;
  line-height: 1.4;
  color: var(--clr-gray);
  max-width: 480px;
  margin-bottom: 20px;
}

.hero-cta {
  display: inline-block;
  background: transparent;
  color: var(--clr-lime);
  border: 2px solid var(--clr-lime);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 30px;
  transition: all 0.25s ease;
}

.hero-cta:hover {
  background: var(--clr-lime);
  color: #09090b;
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(200, 255, 0, 0.4);
}

.hero-image-src {
  width: 900px;
  max-width: 100%;
  height: auto;     
  object-fit: contain;
  flex-shrink: 0;
}

/* Responsivo rápido */
@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 120px 40px 60px 40px;
  }
  .hero-image-src {
    max-width: 80%;
    width: 400px;
  }
  .hero-body {
    margin: 0 auto 40px auto;
  }
  .navbar {
    padding: 20px 40px;
  }
  .navbar.scrolled {
    padding: 12px 40px;
  }
}
