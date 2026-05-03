document.addEventListener("DOMContentLoaded", () => {
    console.log("Il file script.js è stato caricato correttamente!");
    })
    // ... resto del codice

    // --- LOGICA NAVIGAZIONE PROGETTI ---
    const previews = document.querySelectorAll(".sidebar-project");
    const sections = document.querySelectorAll(".project-section");

    previews.forEach(preview => {
        preview.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");

            sections.forEach(section => section.classList.remove("active"));
            
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.add("active");
            }

            previews.forEach(p => p.classList.remove("active"));
            this.classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

// --- LOGICA LIGHTBOX + CAROSELLO ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const allImages = document.querySelectorAll(".clickable-image");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let imageList = [];

if (lightbox && lightboxImg && closeBtn) {

    allImages.forEach((img) => {
        img.addEventListener("click", () => {
            const container = img.closest(".project-visual");
            imageList = Array.from(container.querySelectorAll(".clickable-image"));
            currentIndex = imageList.indexOf(img);
            showImage(currentIndex);
            lightbox.classList.add("active");
        });
    });

    const showImage = (index) => {
        if (index < 0 || index >= imageList.length) return;
        currentIndex = index;
        const img = imageList[currentIndex];
        const fullImg = img.dataset.full || img.src;

        lightboxImg.style.opacity = 0;
        setTimeout(() => {
            lightboxImg.src = fullImg;
            if (caption) {
                caption.textContent = img.dataset.caption || "";
            }
            lightboxImg.onload = () => {
                lightboxImg.style.opacity = 1;
            };
        }, 80);

        if (prevBtn) {
            prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
            prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
        }
        if (nextBtn) {
            nextBtn.style.opacity = currentIndex === imageList.length - 1 ? "0.3" : "1";
            nextBtn.style.pointerEvents = currentIndex === imageList.length - 1 ? "none" : "auto";
        }
    };

    const closeLightbox = () => {
        lightbox.classList.remove("active");
    };

    // Chiude solo cliccando sulla X
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    // Impedisce la chiusura cliccando sull'immagine stessa
    lightboxImg.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Se vuoi che lo sfondo NON chiuda il carosello, tieni queste righe commentate:
    /*
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    */

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showImage(currentIndex + 1);
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    });

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Protegge il clic
            showImage(currentIndex - 1);
        });
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Protegge il clic
            showImage(currentIndex + 1);
        });        
    }
}

