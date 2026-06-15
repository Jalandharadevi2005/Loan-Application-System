import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Employment = () => {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Employment Details</h2>

      <input
        type="text"
        name="employerName"
        placeholder="Employer Name"
        value={formData.employerName || ""}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle || ""}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="monthlyIncome"
        placeholder="Monthly Income"
        value={formData.monthlyIncome || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default Employment;