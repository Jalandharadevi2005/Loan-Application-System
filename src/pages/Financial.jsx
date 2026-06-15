import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Financial = () => {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Financial Information</h2>

      <input
        type="text"
        name="bankName"
        placeholder="Bank Name"
        value={formData.bankName || ""}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="accountNumber"
        placeholder="Account Number"
        value={formData.accountNumber || ""}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="creditScore"
        placeholder="Credit Score"
        value={formData.creditScore || ""}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="monthlyExpenses"
        placeholder="Monthly Expenses"
        value={formData.monthlyExpenses || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default Financial;