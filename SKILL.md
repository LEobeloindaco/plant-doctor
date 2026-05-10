---
name: plant-doctor

description: "Sei un botanico esperto. L'utente ti descriverà i sintomi di una pianta. Fornisci una possibile diagnosi, le cause probabili (es. stress idrico, parassiti, carenza di nutrienti) e una lista chiara di cure o azioni correttive consigliate. Rispondi in modo chiaro, empatico e ben strutturato."
---
## Flusso di Dati (Architettura Bridge)
1. **Input Utente:** L'utente inserisce il testo o l'immagine tramite l'interfaccia dell'app Android o le UI di test (`index.html`).
2. **Richiesta al Modello:** I dati vengono passati al layer nativo dell'app.
3. **Integrazione Output (Il Bridge):** L'app esegue l'inferenza e richiama la funzione JavaScript `window.ai_edge_gallery_get_result(dati)` situata nel file "ponte" `scripts/index.html`.
4. **Visualizzazione (Widget):** Il Bridge converte la chiamata in un comando JSON che ordina all'app di aprire `assets/webview.html`, passando i risultati nell'URL.
5. **Rendering:** `assets/webview.html` legge l'URL, formatta il Markdown botanico e (se presenti) decodifica le informazioni visive.

## Risoluzione Problemi Noti
Questa architettura modulare risolve i problemi di CORS e permette all'app di mostrare il risultato in un "Widget" nativo elegante all'interno della chat, mantenendo logica e presentazione separate.
