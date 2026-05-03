// --- FUNZIONE CHIUSURA BANNER MOBILE ---
function closeWarning() {
    const warning = document.getElementById('mobileWarning');
    if (warning) {
        warning.style.display = 'none';
        document.body.style.paddingTop = "0px"; // Rimuove lo spazio vuoto in alto
    }
}

// Gestione dello spazio iniziale se il banner è presente
document.addEventListener("DOMContentLoaded", () => {
    const warning = document.getElementById('mobileWarning');
    if (warning && window.innerWidth <= 768) {
        document.body.style.paddingTop = "60px"; // Fa spazio al banner all'avvio
    }
});
