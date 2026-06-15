import { useState, useContext } from "react";
import "./App.css";

import PersonalInfo from "./pages/PersonalInfo";
import Employment from "./pages/Employment";
import Financial from "./pages/Financial";
import LoanDetails from "./pages/LoanDetails";
import Documents from "./pages/Documents";
import Review from "./pages/Review";
import Signature from "./pages/Signature";
import Confirmation from "./pages/Confirmation";

import { FormContext } from "./context/FormContext";

function App() {
  const [step, setStep] = useState(1);

  const { formData } = useContext(FormContext);

  const nextStep = () => {
    if (step === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.dob
      ) {
        alert("Please fill all Personal Information fields.");
        return;
      }
    }

    if (step === 2) {
      if (
        !formData.employerName ||
        !formData.jobTitle ||
        !formData.monthlyIncome
      ) {
        alert("Please fill all Employment Details.");
        return;
      }
    }

    if (step === 3) {
      if (
        !formData.bankName ||
        !formData.accountNumber ||
        !formData.creditScore
      ) {
        alert("Please fill all Financial Information.");
        return;
      }
    }

    if (step === 4) {
      if (
        !formData.loanAmount ||
        !formData.loanPurpose ||
        !formData.loanTerm
      ) {
        alert("Please fill all Loan Details.");
        return;
      }
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Employment />;
      case 3:
        return <Financial />;
      case 4:
        return <LoanDetails />;
      case 5:
        return <Documents />;
      case 6:
        return <Review />;
      case 7:
        return (
    <Signature
      nextStep={nextStep}
    />
  );
      case 8:
        return <Confirmation />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="app-container">
      <h1>Loan Application System</h1>

      <h3>Step {step} of 8</h3>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${(step / 8) * 100}%`,
          }}
        ></div>
      </div>

      {renderStep()}

      <br />

      {step > 1 && (
        <button onClick={prevStep}>
          Previous
        </button>
      )}

      {step < 8 && (
        <button onClick={nextStep}>
          Next
        </button>
      )}
    </div>
  );
}

export default App;