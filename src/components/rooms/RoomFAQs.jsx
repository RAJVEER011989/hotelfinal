import { roomFaqData } from "./RoomFaqsData";

export default function RoomFaqs({ roomType }) {
  const faqs = roomFaqData[roomType] || [];

  if (!faqs.length) return null;

  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqIntro">
          <h2>FAQs</h2>
        </div>

        <div className="faqList">
          {faqs.map((item, index) => (
            <details className="faqItem" key={`${roomType}-${index}`}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}