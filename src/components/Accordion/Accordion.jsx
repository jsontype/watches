import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqItems = [
  {
    title: "時計の修理やメンテナンスはどのようなサービスを提供していますか？",
    content:
      "当店では時計の修理、オーバーホール、電池交換、外装のクリーニングなど、さまざまなサービスを提供しています。",
  },
  {
    title: "時計のメンテナンスはどのくらいの頻度で行うべきですか？",
    content:
      "一般的には3〜5年ごとにオーバーホールを行うことをおすすめしますが、時計の種類や使用頻度によって異なる場合があります。",
  },
  {
    title: "時計のバンドやベルトの交換はできますか？",
    content:
      "はい、当店ではバンドやベルトの交換も承っております。さまざまな素材やデザインからお選びいただけます。",
  },
  {
    title: "防水性能が低下しているかどうかを確認する方法はありますか？",
    content:
      "防水性能が心配な場合、定期的に防水テストを行うことをおすすめします。水漏れや曇りが見られる場合は、早めに修理を依頼してください。",
  },
  {
    title: "修理に保証はついていますか？",
    content:
      "はい、当店の修理には保証がついております。詳細についてはお気軽にお問い合わせください。",
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
