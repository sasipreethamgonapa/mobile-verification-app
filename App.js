import React, { useState } from 'react';
import MobileNumberScreen from './MobileNumberScreen';
import OTPVerificationScreen from './OTPVerificationScreen';
import SuccessScreen from './SuccessScreen';

function App() {
  const [screen, setScreen] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleNextScreen = (number) => {
    setMobileNumber(number);
    setScreen(2);
  };

  const handleVerificationStatus = (status) => {
    setVerificationStatus(status);
    setScreen(3);
  };

  return (
    <div className="App">
      {screen === 1 && <MobileNumberScreen onNext={handleNextScreen} />}
      {screen === 2 && (
        <OTPVerificationScreen
          mobileNumber={mobileNumber}
          onVerify={handleVerificationStatus}
        />
      )}
      {screen === 3 && <SuccessScreen />}
      {verificationStatus === false && (
        <div className="error-message">OTP verification failed!</div>
      )}
    </div>
  );
}

export default App;
