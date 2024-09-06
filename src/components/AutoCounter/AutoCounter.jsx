import Counter from "./Counter";

const counters = [
  { id: 1, number: 10, text: "YEARS OF SERVICE" },
  { id: 2, number: 256, text: "HAPPY CUSTOMERS" },
  { id: 3, number: 112, text: "CUSTOMER SATISFACTION" },
];

const AutoCounter = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="auto-counter-section">
        <div className="row align-items-center gap-lg-0 gap-3" id="counter">
          {counters?.map((counter, index) => (
            <div key={counter.id} className="col-lg-4">
              <Counter
                end={counter.number}
                delay={index * 50}
                text={counter.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCounter;
