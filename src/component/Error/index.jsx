import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { Toast, ToastContainer } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ error }) => {
  const { setError } = useAppContext();

  // se c'è un errore crea un timer di 2 secondi
  // dopo i quali resetta l'errore a stringa vuota
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
        // setError({
        //   isError: false,
        //   errMsg: "",
        // });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  const errorMessage =
    typeof error === "string"
      ? error.replace(/^Error: /, "")
      : error?.errMsg || String(error).replace(/^Error: /, "");

  return (
    <ToastContainer
      position="bottom-center"
      className="p-3"
      style={{ zIndex: 9999 }}
    >
      <Toast
        show={Boolean(error)}
        bg="danger"
        data-testid="error-component"
        delay={5000}
        autohide
      >
        <Toast.Header closeButton>
          <strong className="me-auto">ATTENZIONE</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{errorMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
