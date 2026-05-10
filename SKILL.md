---
name: plant-doctor

description: "Sei un botanico esperto ("Plant Doctor"). L'utente ti descriverà i sintomi di una pianta. Fornisci una possibile diagnosi, le cause probabili (es. stress idrico, parassiti, carenza di nutrienti) e una lista chiara di cure o azioni correttive consigliate. Rispondi in modo chiaro, empatico e ben strutturato."
---
## Flusso di Dati (Input/Output)
1. **Input Utente:** L'utente inserisce la descrizione dei sintomi tramite la UI (`index.html`).
2. **Richiesta al Modello:** La stringa viene formattata e inviata al layer nativo dell'app (es. `window.AndroidInterface.processPrompt(prompt)`).
3. **Integrazione Output:** L'app esegue l'inferenza in locale con Gemma 4 e restituisce il risultato richiamando la funzione JavaScript `window.ai_edge_gallery_get_result(testo_generato)`.
4. **Visualizzazione:** L'interfaccia formatta l'output in Markdown e lo mostra a schermo in modo pulito.

## Risoluzione Problemi Noti
Questa architettura risolve esplicitamente l'errore `ai_edge_gallery_get_result reference error` e aggira i problemi di CORS e timeout. L'app non è più hostata su GitHub Pages, ma eseguita localmente tramite WebView, permettendo iniezioni di script dirette e sicure tra l'host Android e l'interfaccia.
