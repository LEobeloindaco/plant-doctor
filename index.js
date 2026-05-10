window.ai_edge_gallery_get_result = async function(data) {
    // Codifichiamo il parametro data per passarlo in modo sicuro tramite URL
    const encodedData = encodeURIComponent(data || "{}");
    
    // Restituiamo il formato JSON corretto per istruire la Gallery ad aprire una Webview
    return JSON.stringify({
        webview: {
            url: `https://leobeloindaco.github.io/plant-doctor/?data=${encodedData}`
        }
    });
};
