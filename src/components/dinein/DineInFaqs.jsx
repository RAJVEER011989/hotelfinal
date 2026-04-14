import React from "react";
import { diningFaqData } from "./DineInFaqsData";

export default function DiningFAQs({ diningType }) {
  const faqs = diningFaqData[diningType];

  if (!faqs) return null;

  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqIntro">
          <h2>Dining FAQs</h2>
        </div>

        <div className="faqList">
          {faqs.map((faq, index) => (
            <details key={index} className="faqItem">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}