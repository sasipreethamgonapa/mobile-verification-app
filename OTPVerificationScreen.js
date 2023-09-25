import React, { useState } from 'react';

function OTPVerificationScreen({ mobileNumber, onVerify }) {
  const [otp, setOTP] = useState('');

  const handleVerifyClick = async () => {
    // Check if the OTP is valid (you can add validation)
    if (otp) {
      try {
        // Make an API call to verify OTP
        const response = await fetch('/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobileNumber, otp }),
        });

        const data = await response.json();

        if (data.success) {
          onVerify(true);
        } else {
          onVerify(false);
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        onVerify(false);
      }
    }
  };

  return (
    <div>
      <h2>Screen 2: OTP Verification</h2>
      <p>Enter OTP sent to {mobileNumber}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <button onClick={handleVerifyClick}>Verify OTP</button>
    </div>
  );
}

export default OTPVerificationScreen;
