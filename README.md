per avviare il progetto dopo aver clonato il repository e installato le dipendenze con 'npm install' e si avvia il progetto con 'npm start' , se il browser restituisce l'errore : redux-persist-transform-encrypt: No secret key provided. Significa che non trova il file '.env' che contiene 2 variabili segrete il secretKey e il secretToken. Quindi bisogna creare, FUORI 'SRC' , un file .env :

REACT_APP_PERSIST_KEY=lapersistkey
REACT_APP_STRIVE_TOKEN=tokengenerato

Per generare il token, andare all'indirizzo https://strive.school/linkedin-registration compilare il form di registrazione, copiare il token e incollarlo in REACT_APP_STRIVE_TOKEN, mentre persist key è una stringa casuale.

E se l'indirizzo non è raggiungibile e il token non si riesce a generare? (come successo a me)