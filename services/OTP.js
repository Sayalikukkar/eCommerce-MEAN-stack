const otpGenerator = require('otp-generator');
const { OTP_LENGTH, OTP_CONFIG } = require('../constants/constant');
module.exports.generateOtp = () => {
  const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
  return OTP;
};