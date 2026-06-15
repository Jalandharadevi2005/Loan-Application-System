import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Review = () => {
  const { formData } = useContext(FormContext);

  return (
    <div>
      <h2>Review Application</h2>

      <h3>Personal Information</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Date of Birth: {formData.dob}</p>

      <h3>Employment Details</h3>
      <p>Employer: {formData.employerName}</p>
      <p>Job Title: {formData.jobTitle}</p>
      <p>Monthly Income: {formData.monthlyIncome}</p>

      <h3>Financial Information</h3>
      <p>Bank Name: {formData.bankName}</p>
      <p>Account Number: {formData.accountNumber}</p>
      <p>Credit Score: {formData.creditScore}</p>
      <p>Monthly Expenses: {formData.monthlyExpenses}</p>

      <h3>Loan Details</h3>
      <p>Loan Amount: {formData.loanAmount}</p>
      <p>Loan Purpose: {formData.loanPurpose}</p>
      <p>Loan Term: {formData.loanTerm}</p>

      <h3>Uploaded Documents</h3>
      <p>Identity Proof: {formData.identityProof}</p>
      <p>Payslip: {formData.payslip}</p>
      <p>Bank Statement: {formData.bankStatement}</p>
    </div>
  );
};

export default Review;