import React, { useState } from 'react';

function MobileNumberScreen({ onNext }) {
  const [mobileNumber, setMobileNumber] = useState('');
  
  const handleNextClick = () => {
    // Check if the mobile number is valid (you can add validation)
    if (mobileNumber) {
      onNext(mobileNumber);
    }
  };

  return (
    <div>
      <h2>Screen 1: Enter Mobile Number</h2>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleNextClick}>Send OTP</button>
    </div>
  );
}

export default MobileNumberScreen;
