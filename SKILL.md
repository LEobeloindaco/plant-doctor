---
name: plant-doctor
description: Analizza lo stato di salute delle piante mostrando una ricca interfaccia grafica nativa. Dopodiché mostra i dettagli dell'analisi (diagnosi, salute, consigli).
---

# Plant Doctor

## Files
- `index.html`: Entry point locale
- `index.js`: Restituisce l'URL della UI su GitHub Pages

## Prompts / Triggers
- analizza questa pianta
- plant doctor
- pianta malata
- diagnosi pianta
- apri plant doctor

## Instructions

Quando l'utente allega una foto o usa uno dei trigger:

1. **Analizza l'immagine** per determinare la salute della pianta, la diagnosi e i consigli.
2. **Chiama il tool `run_js`** con:
   - **script name**: `index.js`
   - **data**: `{
       "image_url": "{{image_url}}",
       "analysis": {
         "health_score": <punteggio 0-100>,
         "urgency": "bassa"|"media"|"alta",
         "diagnosis": "<diagnosi in italiano>",
         "tips": ["consiglio 1", "consiglio 2", "consiglio 3"]
       }
     }`

Lascia che l'interfaccia HTML mostri i risultati dell'analisi ricevuta.

La skill deve aprirsi come il virtual-piano.
