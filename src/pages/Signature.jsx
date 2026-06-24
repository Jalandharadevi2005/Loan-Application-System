import { useRef, useContext, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { FormContext } from "../context/FormContext";
import axios from "axios";

const Signature = ({ nextStep }) => {
  const sigCanvas = useRef(null);

  const { formData, setFormData } =
    useContext(FormContext);

  const [loading, setLoading] =
    useState(false);

  const saveSignature = () => {
    const signatureData =
      sigCanvas.current.toDataURL();

    setFormData({
      ...formData,
      signature: signatureData,
    });

    alert("Signature Saved!");
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await axios.post(
  "http://localhost:5000/api/loan/apply",
  formData
);

      alert(
        "Application Submitted Successfully!"
      );

      nextStep();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to submit application."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>E-Signature</h2>

      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: "signatureCanvas",
        }}
      />

      <br /><br />

      <button onClick={saveSignature}>
        Save Signature
      </button>

      <button onClick={clearSignature}>
        Clear
      </button>

      <br /><br />

      <button
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Submit Application"}
      </button>
    </div>
  );
};

export default Signature;