/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Alert, Close } from "@theme-ui/components";
export default function AlertEvent({ variant, message, display, setAlert }) {
  useEffect(() => {
    if (display === "none") return;
    setTimeout(() => {
      setAlert({ variant, message, display: "none" });
    }, 3000);
  }, [display]);
  return (
    <Alert variant={variant} sx={{ zIndex: 9999, display: display }}>
      {message}
      <Close
        ml="auto"
        mr={-2}
        onClick={() => setAlert({ variant, message, display: "none" })}
      />
    </Alert>
  );
}
