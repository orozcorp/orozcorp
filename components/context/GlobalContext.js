import { useState, createContext, useContext } from "react";
import useLocalStorage from "../../lib/helpers/useLocalStorage";
import AlertEvent from "../atoms/AlertEvent";

const GlobalContext = createContext();

export function GlobalContainer(props) {
  const [alert, setAlert] = useState({
    message: "",
    display: "none",
    variant: "orange",
  });
  const [sentMessage, setSentMessage] = useLocalStorage("sentMessage", false);
  return (
    <GlobalContext.Provider
      value={{
        setAlert: setAlert,
        message: [sentMessage, setSentMessage],
      }}
    >
      <AlertEvent
        variant={alert.variant}
        message={alert.message}
        display={alert.display}
        setAlert={setAlert}
      />
      {props.children}
    </GlobalContext.Provider>
  );
}
export function useGlobalData() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalData must be used in a Global provider");
  }
  return context;
}
