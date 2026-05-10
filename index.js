async function ai_edge_gallery_get_result(data) {
    // Restituiamo il formato JSON per aprire la Webview locale.
    // Usare il file locale risolve i problemi di timeout e permette 
    // di caricare le immagini del telefono senza blocchi di sicurezza (CORS).
    return JSON.stringify({
        webview: {
            url: "index.html"
        }
    });
}

// Esponiamo la funzione sia a livello globale (window) che come esportazione,
// per coprire tutti i modi in cui l'app Edge Gallery potrebbe caricarla.
window.ai_edge_gallery_get_result = ai_edge_gallery_get_result;
export { ai_edge_gallery_get_result };
