const mongoose = require("mongoose");

const LoanApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,

  employerName: String,
  jobTitle: String,
  monthlyIncome: String,

  bankName: String,
  accountNumber: String,
  creditScore: String,

  loanAmount: String,
  loanPurpose: String,
  loanTerm: String,

  identityProof: String,
  payslip: String,
  bankStatement: String,

  signature: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "LoanApplication",
  LoanApplicationSchema
);