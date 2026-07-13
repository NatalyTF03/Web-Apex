document.addEventListener("DOMContentLoaded", () => {

    // --- REVEAL EFFECTS ENGINE ---
    const revealSections = document.querySelectorAll(".reveal");
    
    const triggerSectionReveal = () => {
        const thresholdLine = (window.innerHeight / 5) * 4;
        
        revealSections.forEach(section => {
            const elementTopCoordinate = section.getBoundingClientRect().top;
            // Corregido: Si el elemento ya pasó o está cerca de entrar, se activa inmediatamente
            if (elementTopCoordinate < thresholdLine) {
                section.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", triggerSectionReveal);
    triggerSectionReveal(); // Ejecución inmediata preventiva

    // --- RESPONSIVE MOBILE MENU TOGGLE ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        if(navLinks.classList.contains("mobile-open")) {
            navLinks.classList.remove("mobile-open");
            navLinks.removeAttribute("style");
        } else {
            navLinks.classList.add("mobile-open");
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "100%";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.backgroundColor = "#000000";
            navLinks.style.padding = "30px";
            navLinks.style.gap = "20px";
        }
    });

    // --- SECTION 2: ABOUT CAROUSEL SYSTEM ---
    const carouselImgs = document.querySelectorAll(".carousel-img");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    let autoRotationTimer;

    const changeSlideTo = (targetIndex) => {
        carouselImgs.forEach(img => img.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        
        carouselImgs[targetIndex].classList.add("active");
        dots[targetIndex].classList.add("active");
        currentSlide = targetIndex;
    };

    const startCarouselLoop = () => {
        autoRotationTimer = setInterval(() => {
            let nextIndex = (currentSlide + 1) % carouselImgs.length;
            changeSlideTo(nextIndex);
        }, 3000);
    };

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            clearInterval(autoRotationTimer);
            const index = parseInt(e.target.getAttribute("data-index"));
            changeSlideTo(index);
            startCarouselLoop();
        });
    });

    startCarouselLoop();

    // --- SECTION 5: ALUMNI MOUSE HOVER PREVIEW CONTROLLER ---
    const tableRows = document.querySelectorAll(".alumni-row");
    const hoverPreview = document.getElementById("alumni-preview");

    tableRows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            const imgSrc = row.getAttribute("data-img");
            hoverPreview.style.backgroundImage = `url('${imgSrc}')`;
            hoverPreview.style.display = "block";
        });

        row.addEventListener("mousemove", (e) => {
            // Posicionamiento flotante fluido adaptado al viewport
            hoverPreview.style.top = (e.clientY + 20) + "px";
            hoverPreview.style.left = (e.clientX + 20) + "px";
        });

        row.addEventListener("mouseleave", () => {
            hoverPreview.style.display = "none";
        });
    });

    // --- SECTION 7: SCROLL HORIZONTAL TRANSFORMATION 

    // --- SECTION 9: REVIEWS CLONING DUPLICATOR FOR INFINITE CYCLE ---
    const marqueeTrack = document.getElementById("review-marquee");
    if(marqueeTrack) {
        const corePayload = marqueeTrack.innerHTML;
        marqueeTrack.innerHTML = corePayload + corePayload; // Duplica nodos
    }

    // --- SECTION 10: FAQ ACCORDION ENGINE ---
    const faqBoxes = document.querySelectorAll(".faq-box");

    faqBoxes.forEach(box => {
        const trigger = box.querySelector(".faq-trigger");
        trigger.addEventListener("click", () => {
            const isOpen = box.classList.contains("open");
            
            faqBoxes.forEach(item => {
                item.classList.remove("open");
                item.querySelector(".faq-content").style.maxHeight = null;
            });

            if (!isOpen) {
                box.classList.add("open");
                const content = box.querySelector(".faq-content");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Carga de preguntas extras ocultas
    const loadFaqBtn = document.getElementById("btn-load-faq");
    const hiddenFaqs = document.querySelectorAll(".extra-faq");

    loadFaqBtn.addEventListener("click", () => {
        hiddenFaqs.forEach(faq => faq.style.display = "block");
        loadFaqBtn.style.display = "none";
    });
});






