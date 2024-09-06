import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqItems = [
  {
    title: "What services do you offer at your auto repair shop?",
    content:
      "Yes, we provide a warranty on our auto repairs. Please contact us for more details.",
  },
  {
    title: "How often should I get my car serviced?",
    content:
      "It is recommended to service your car every 5,000 to 7,500 miles, or as specified in your vehicle’s manual.",
  },
  {
    title: "How do I know if my brakes need to be replaced?",
    content:
      "If you hear a squealing noise, feel vibrations, or notice that it takes longer to stop, it may be time to replace your brakes.",
  },
  {
    title: "What steps can I take between services?",
    content:
      "Regularly check tire pressure, oil levels, and keep the car clean. Ensure timely maintenance as per the vehicle’s manual.",
  },
  {
    title: "Do you provide warranty on your auto repairs?",
    content:
      "Yes, we provide a warranty on our auto repairs. Please contact us for more details.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="ak-accordion">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
