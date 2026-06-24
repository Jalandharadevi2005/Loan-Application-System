const LoanApplication = require("../models/LoanApplication");

const createApplication = async (req, res) => {
  try {
    const application = await LoanApplication.create(req.body);

    res.status(201).json({
      success: true,
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createApplication,
};