import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Thankyou.css'

const Thankyou = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div>
      <div className="message">
        <h3>Thank you for submitting the form!</h3>
        <p>Redirecting to the home page in <strong>{countdown}</strong> seconds...</p>
      </div>
    </div>
  );
};

export default Thankyou;
