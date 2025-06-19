import React from "react";
import { createContext, useCallback, useContext, useState } from "react";
import Loading from "../component/Loading";
import Error from "../component/Error";

/**
 * Componente che fornisce un contesto di applicazione per gestire gli errori, i messaggi e il caricamento.
 */

// creazione contesto
const AppContext = createContext();

/**
 * Hook personalizzato per utilizzare il contesto di applicazione.
 */
export const useAppContext = () => useContext(AppContext);

/**
 * Messaggio di default per le operazioni in corso.
 */
export const DEFAULT_MESSAGE = "Operazione in corso";

/**
 * Componente Provider che fornisce il contesto di applicazione ai componenti figli.
 */
export const AppProvider = ({ children }) => {
  // stato che gestisce gli errori
  const [error, setError] = useState("");
  // stato che gestisce i messaggi di errore
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  // stato che gestisce il caricamento
  const [loading, setLoading] = useState(false);
  /**
   * Funzione che gestisce il caricamento dei componenti settando messaggi e loading.
   */
  const setIsLoading = useCallback(
    (status, msg) => {
      setLoading(status);
      setMessage(msg?.length ? msg : DEFAULT_MESSAGE);
    },
    [setLoading]
  );

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        message,
        setMessage,
        loading,
        setLoading,
        setIsLoading,
      }}
    >
      <>
        <Loading open={loading} loading={message}>
          {message}
        </Loading>
        <Error error={error} />
        {children}
      </>
    </AppContext.Provider>
  );
};
