import React, { useState, useEffect } from "react";

const Counter = ({ end, delay, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 100;
    const duration = 3000;
    const intervalTime = duration / (end / increment);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div
      className="ak-funfact ak-style1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="ak-funfact-number">
        <div>
          <span className="ak-stroke-number">{count}</span>
        </div>
        <div>
          <span className="ak-stroke-number">+</span>
        </div>
      </div>
      <div className="ak-funfact-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Counter;
