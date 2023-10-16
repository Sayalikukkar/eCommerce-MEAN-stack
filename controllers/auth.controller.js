const User = require("../models/User");
const { generateOtp } = require("../services/OTP");
const { sendMail } = require("../services/mail");

const generateOTP = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const otpGenerated = generateOtp();
  try {
    await User.updateOne({ email }, { $set: { otp: otpGenerated } });
    await sendMail({
      to: email,
      OTP: otpGenerated,
    });
    res
      .status(200)
      .json({
        success: true,
        message: "If your address is correct, you will receive an email!",
      });
  } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong. Try again later."
      });
    }
};

module.exports = {
  generateOTP,
};
