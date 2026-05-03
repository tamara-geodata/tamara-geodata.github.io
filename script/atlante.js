const images = [
    "../images/06_Atlante/10_vette_Alpi_Apuane-01.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-02.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-03.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-04.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-05.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-06.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-07.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-08.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-09.jpg",
    "../images/06_Atlante/10_vette_Alpi_Apuane-10.jpg"
];

let index = 0;

const imgElement = document.getElementById("atlante-img");
const prevBtn = document.querySelector(".atl-prev");
const nextBtn = document.querySelector(".atl-next");

/**
 * Funzione principale per aggiornare la galleria
 * @param {number} i - L'indice della nuova immagine
 * @param {boolean} skipFade - Se true, cambia immagine istantaneamente (usato all'avvio)
 */
function updateGallery(i, skipFade = false) {
    if (i < 0 || i >= images.length) return;

    if (skipFade) {
        // Caricamento immediato all'avvio (senza lampeggio)
        index = i;
        imgElement.src = images[index];
        updateButtons();
    } else {
        // Caricamento con dissolvenza durante la navigazione
        imgElement.classList.add("fade-out");

        setTimeout(() => {
            index = i;
            imgElement.src = images[index];

            // Rimuove la trasparenza solo quando l'immagine è pronta
            imgElement.onload = () => {
                imgElement.classList.remove("fade-out");
            };
            
            updateButtons();
        }, 150); // 150ms sincronizzato con il tuo CSS
    }
}

/**
 * Gestisce la visibilità delle frecce laterali
 */
function updateButtons() {
    prevBtn.style.opacity = (index === 0) ? "0" : "1";
    prevBtn.style.pointerEvents = (index === 0) ? "none" : "auto";

    nextBtn.style.opacity = (index === images.length - 1) ? "0" : "1";
    nextBtn.style.pointerEvents = (index === images.length - 1) ? "none" : "auto";
}

// --- EVENTI ---

// Click sui bottoni
prevBtn.addEventListener("click", () => updateGallery(index - 1));
nextBtn.addEventListener("click", () => updateGallery(index + 1));

// Frecce tastiera
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") updateGallery(index + 1);
    if (e.key === "ArrowLeft") updateGallery(index - 1);
});

// --- AVVIO ---
// Usiamo 'true' per caricare la prima immagine senza dissolvenza iniziale
updateGallery(0, true);
