import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    const timeLeft = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)) || 0,
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30) || 0,
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24) || 0,
      minutes: Math.floor((difference / (1000 * 60)) % 60) || 0,
      seconds: Math.floor((difference / 1000) % 60) || 0,
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="comming-section ak-bg ak-center">
      <div className="comming-content">
        <h1 className="comming-title">Coming Soon</h1>
        <div className="time-info" id="comming-section">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div className="time-card" key={unit}>
              <h1 className="time-text ak-stroke-number color-white">
                {value}
              </h1>
              <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
