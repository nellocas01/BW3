# 💼 LinkedIn Clone

Questo progetto è una riproduzione parziale dell’interfaccia di LinkedIn, realizzata con **React** e **Redux**. L’obiettivo è simulare l’esperienza utente del noto social professionale, integrando dinamicamente contenuti tramite API pubbliche e gestendo stato globale, errori e caricamenti asincroni.

Il progetto è stato pensato per approfondire l’utilizzo di **React**, **Redux Toolkit**, **React-Bootstrap**, **Context API**, e l’integrazione con API esterne RESTful.

---

## 🎯 Obiettivi del progetto

- Ricreare l'interfaccia utente di LinkedIn con particolare focus su homepage, profilo e offerte di lavoro.
- Gestire una pagina dinamica dei post con commenti associati.
- Implementare la gestione CRUD delle esperienze nella pagina profilo.
- Introdurre filtri dinamici e ricerca per le offerte di lavoro.
- Introdurre una gestione globale dello stato con Redux e persistenza via `redux-persist`.
- Gestire errori e caricamenti asincroni tramite Context personalizzato.
- Realizzare un’interfaccia responsive e coerente con il design di LinkedIn.

---

## ✅ Funzionalità implementate

### 🔗 Generale
- Routing completo tra le pagine principali tramite React Router.
- Stato globale gestito tramite Redux + `redux-persist`.
- Context API personalizzato per gestione di errori e caricamenti.
- Interfaccia moderna e responsive con `react-bootstrap`.

### 🏠 Home Page
- Visualizzazione dinamica dei post.
- Possibilità di **creare un nuovo post** (testo).
- **Filtraggio dei post** per: "tutti" e "persone collegate".

### 👤 Profile Page
- Visualizzazione dinamica dei dati utente.
- CRUD completo sulle **esperienze lavorative**: aggiunta, modifica, eliminazione.
- Possibilità di **simulare il collegamento**.

### 💼 Jobs Page
- Visualizzazione dinamica delle offerte di lavoro.
- **Barra di ricerca globale** (nella navbar) per cercare un lavoro.
- **Filtri avanzati** per categoria e azienda.
- **Funzionalità di salvataggio nei preferiti** per le offerte di lavoro.

---

## 🛠️ Tecnologie utilizzate

- **React.js** (JSX, functional components, hooks)
- **Redux Toolkit** per la gestione dello stato
- **redux-persist** per la persistenza dello stato
- **React-Bootstrap** per la UI
- **React Router DOM** per il routing
- **Context API** per errori e loading globali
- **Bootstrap 5** (con override personalizzati)
- **dotenv** per la gestione delle variabili ambiente
- **Mock API o Strive API** per contenuti dinamici (dove disponibili)

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

## 📱 Responsività

Il progetto è stato sviluppato per adattarsi a:

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

Utilizza il sistema a griglia di Bootstrap e componenti responsive per garantire un’interfaccia coerente su ogni dispositivo.

---

## 🔧 Come eseguire il progetto

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