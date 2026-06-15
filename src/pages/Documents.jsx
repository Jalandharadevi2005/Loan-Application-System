import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Documents = () => {
  const { formData, setFormData } = useContext(FormContext);

  const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
  ];

  if (!allowedTypes.includes(file.type)) {
    alert("Only PDF, JPG and PNG files are allowed.");
    return;
  }

  setFormData({
    ...formData,
    [e.target.name]: file.name,
  });
};
  return (
    <div>
      <h2>Document Upload</h2>

      <label>Aadhaar / PAN Card</label>
      <br />
      <input
        type="file"
        name="identityProof"
        onChange={handleFileChange}
      />

      <br /><br />

      <label>Payslip</label>
      <br />
      <input
        type="file"
        name="payslip"
        onChange={handleFileChange}
      />

      <br /><br />

      <label>Bank Statement</label>
      <br />
      <input
        type="file"
        name="bankStatement"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Documents;