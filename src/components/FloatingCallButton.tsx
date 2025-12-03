
import { useState, useEffect } from 'react';
import './FloatingCallButton.css';

function FloatingCallButton() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      // Get current time in major US timezones
      const now = new Date();
      
      const timezones = [
        { name: 'ET', offset: -5 }, // Eastern
        { name: 'CT', offset: -6 }, // Central
        { name: 'MT', offset: -7 }, // Mountain
        { name: 'PT', offset: -8 }, // Pacific
      ];

      let available = false;
      
      for (const tz of timezones) {
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const tzDate = new Date(utc + (3600000 * tz.offset));
        const hours = tzDate.getHours();
        
        // Check if any US timezone is between 9am-9pm
        if (hours >= 9 && hours < 21) {
          available = true;
          break;
        }
      }

      setIsAvailable(available);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-call-widget">
      <a href="tel:8003271709" className="call-button">
        <div className="call-button-content">
          <div className="call-icon-wrapper">
            <span className="call-icon">📞</span>
            <span className={`status-indicator ${isAvailable ? 'available' : 'unavailable'}`}></span>
          </div>
          <div className="call-info">
            <span className="call-label">
              {isAvailable ? 'Live Agents Available' : 'Leave a Message'}
            </span>
            <span className="call-number">(800) 327-1709</span>
          </div>
        </div>
      </a>
      <div className="widget-tooltip">
        <div className="tooltip-status">
          <span className={`status-dot ${isAvailable ? 'available' : 'unavailable'}`}></span>
          <span>{isAvailable ? 'We\'re Online!' : 'Currently Offline'}</span>
        </div>
        <div className="tooltip-hours">
          Available: 9 AM - 9 PM (All US Timezones)
        </div>
      </div>
    </div>
  );
}

export default FloatingCallButton;
