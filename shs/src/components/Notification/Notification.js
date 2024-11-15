import React, { useState, useEffect } from 'react';
import './Notification.scss';

const Notification = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message && type) {
      setIsVisible(true); 

      const timer = setTimeout(() => {
        setIsVisible(false); 
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [message, type]);

  return (
    isVisible && (
      <div className={`notification ${type}`}>
        {message}
      </div>
    )
  );
};

export default Notification;
