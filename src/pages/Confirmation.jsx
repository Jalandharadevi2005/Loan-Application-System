import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Confirmation = () => {
  const { formData } = useContext(FormContext);

  const referenceNumber =
  "LOAN-" + Math.floor(Math.random() * 1000000);

localStorage.removeItem("loanData");

  return (
    <div>
      <h2>Application Submitted Successfully 🎉</h2>

      <h3>Reference Number</h3>
      <p>{referenceNumber}</p>

      <h3>Applicant</h3>
      <p>
        {formData.firstName} {formData.lastName}
      </p>

      <p>Email: {formData.email}</p>

      <p>
        Thank you for submitting your loan
        application.
      </p>
    </div>
  );
};

export default Confirmation;