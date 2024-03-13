"use client";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getQR } from "../../server/userInteraction";
import Spinner from "../../components/atoms/Spinner";

export default function LogInPhone({}) {
  const [qr, setQR] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(45);
  useEffect(() => {
    let interval;
    if (qr && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setQR("");
      setTimer(45);
    }
    return () => clearInterval(interval); // Clean up interval
  }, [qr, timer]);
  const getQRMutation = useMutation({
    async mutationFn() {
      const { data, errors } = await getQR();
      if (errors) throw errors;
      setQR(data || "");
      setLoading(false);
    },
  });
  const getQRFn = async () => {
    setLoading(true);
    try {
      getQRMutation.mutate();
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
  };

  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      {loading && <Spinner />}
      {qr ? (
        <div className="flex flex-col flex-nowrap justify-center items-center max-w-xs border rounded text-center p-4 shadow-xl">
          <div className="mb-4 font-bold">
            Favor de scanear el codigo con tu whatsapp
          </div>
          <QRCodeSVG
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            style={{ width: "150px", marginBottom: "12px" }}
            value={qr}
          />
          <div>Tiempo restante: {timer} seconds</div>
        </div>
      ) : (
        <button
          onClick={getQRFn}
          disabled={loading}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2"
        >
          {loading ? "Generando QR" : "Generar QR para iniciar"}
        </button>
      )}
    </div>
  );
}
