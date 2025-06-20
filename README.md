💼 LinkedIn Clone

Questo progetto è una riproduzione parziale dell’interfaccia di LinkedIn, realizzata con **React** e **Redux**. L’obiettivo è simulare l’esperienza utente del noto social professionale, integrando dinamicamente contenuti tramite API pubbliche e gestendo stato globale, errori e caricamenti asincroni.

Il progetto è stato pensato per approfondire l’utilizzo di **React**, **Redux Toolkit**, **React-Bootstrap**, **Context API**, e l’integrazione con API esterne RESTful.

---

🎯 Obiettivi del progetto

- Ricreare l'interfaccia utente di LinkedIn con particolare focus sulla homepage e profilo.
- Strutturare una pagina dinamica dei post e delle offerte di lavoro.
- Implementare la visualizzazione dei commenti associati ai post.
- Introdurre una gestione globale dello stato con Redux.
- Gestire errori e caricamenti tramite Context personalizzato.
- Realizzare un’interfaccia responsive e coerente con il design di LinkedIn.
- Simulare autenticazione e persistenza del token tramite `redux-persist`.

---

✅ Funzionalità implementate

- Homepage dinamica con visualizzazione dei post e commenti (dati mock o reali).
- Componente `Post` con contenuti testuali e multimediali.
- Funzionalità “Crea nuovo post” tramite modale (testo, immagine, video, evento).
- Visualizzazione lista offerte di lavoro (`jobs`) con descrizioni HTML convertite e parse.
- Sidebar utente personalizzata con dati dinamici.
- Routing tra le pagine principali con React Router.
- Gestione dello stato globale con Redux + `redux-persist`.
- Gestione di errori e caricamenti tramite Context personalizzato (`useAppContext`).
- UI moderna e responsive con `react-bootstrap`.

---

🛠️ Tecnologie utilizzate

- **React.js** (JSX, functional components, hooks)
- **Redux Toolkit** per la gestione dello stato
- **React-Bootstrap** per componenti UI
- **React Router DOM** per la navigazione tra pagine
- **Context API** per la gestione degli errori e stato di caricamento
- **redux-persist** per persistenza dei dati nello storage locale
- **Bootstrap 5** (con override personalizzato)
- **dotenv** per la gestione delle variabili ambiente
- **Mock API o Strive API** per contenuti dinamici (se disponibile)

---

📁 Struttura del progetto

/src
├── /assets # Immagini e risorse statiche
├── /components # Componenti riutilizzabili (Card, Post, Sidebar, JobList, ecc.)
├── /context # AppContext personalizzato per gestione loading e errori
├── /redux # Slice, Store e Middleware Redux
├── App.jsx # Componente principale con routing
├── main.jsx # Entry point React

---

📱 Responsività

Il progetto è stato sviluppato per adattarsi a:

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

Utilizza il sistema a griglia di Bootstrap e componenti responsive per garantire un’interfaccia coerente su ogni dispositivo.

---

🔧 Come eseguire il progetto

1. **Clona il repository**:

```bash
git clone https://github.com/nellocas01/BW3.git
```

2. **Installa le dipendenze**:

```bash
npm install
```

3. ⚙️ Configurazione .env (obbligatoria)

Per avviare correttamente il progetto è necessario creare un file .env nella root del progetto (fuori dalla cartella src). Questo file contiene due variabili ambiente fondamentali:

```bash
REACT_APP_PERSIST_KEY=lapersistkey
REACT_APP_STRIVE_TOKEN=tokengenerato
```

🔑 Spiegazione delle variabili:
- REACT_APP_PERSIST_KEY: una stringa casuale usata come chiave di cifratura per redux-persist-transform-encrypt. È fondamentale per proteggere i dati sensibili salvati nello storage locale (es. token o dati utente).
⚠️ Se questa variabile manca, otterrai l’errore bloccante:
redux-persist-transform-encrypt: No secret key provided.

- REACT_APP_STRIVE_TOKEN: è il token JWT necessario per autenticarsi con l’API REST di Strive School, usata per ottenere i dati reali di utenti, post e job.

🧾 Come ottenere il token REACT_APP_STRIVE_TOKEN
Vai su 👉 https://strive.school/linkedin-registration

Compila il form di registrazione (puoi inserire anche dati fittizi).

Dopo la registrazione, riceverai un token JWT.

Copia il token e incollalo nel file .env, così:

REACT_APP_STRIVE_TOKEN=ilTuoTokenCopiato

4. Avvia l’ambiente di sviluppo:

```bash
npm start
```

5. Visita http://localhost:3000 nel browser.

🧪 Stato delle API

Se non riesci ad accedere all’endpoint di Strive, assicurati di avere un token valido.

In alternativa, il progetto utilizza fallback locali (mockUser, mockPosts, mockComments, mockJobs).

👨‍💻 Autore

[Aniello Casolla] — [17/04/2023]

Progetto sviluppato come esercitazione avanzata per migliorare la padronanza di React moderno, Redux, gestione dello stato, uso del Context API, e consumo API RESTful in un contesto realistico.