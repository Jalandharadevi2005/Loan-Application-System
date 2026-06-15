import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const LoanDetails = () => {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Loan Details</h2>

      <input
        type="number"
        name="loanAmount"
        placeholder="Loan Amount"
        value={formData.loanAmount || ""}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="loanPurpose"
        placeholder="Loan Purpose"
        value={formData.loanPurpose || ""}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="loanTerm"
        value={formData.loanTerm || ""}
        onChange={handleChange}
      >
        <option value="">Select Loan Term</option>
        <option value="6 Months">6 Months</option>
        <option value="12 Months">12 Months</option>
        <option value="24 Months">24 Months</option>
        <option value="36 Months">36 Months</option>
        <option value="48 Months">48 Months</option>
        <option value="60 Months">60 Months</option>
      </select>
    </div>
  );
};

export default LoanDetails;