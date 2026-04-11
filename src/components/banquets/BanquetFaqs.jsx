export default function BanquetFaqs() {
  const faqs = [
    {
      question: "What banquet options are available at URRTH?",
      answer:
        "URRTH offers three banquet venues — Emerald, Sapphire, and Pearl — each designed for different scales of celebrations and event experiences.",
    },
    {
      question: "Which banquet is best for large celebrations?",
      answer:
        "Emerald is ideal for large-scale celebrations and weddings due to its spacious layout and grand ambience.",
    },
    {
      question: "Do you have options for mid-sized events?",
      answer:
        "Yes, Sapphire is designed for mid-sized gatherings and social functions with a refined and comfortable setting.",
    },
    {
      question: "Is there a banquet for small or private events?",
      answer:
        "Pearl is perfect for intimate gatherings and smaller celebrations with a warm and elegant atmosphere.",
    },
    {
      question: "Can I enquire about bookings and availability?",
      answer:
        "Yes, you can contact us to enquire about availability, event planning, and customized arrangements.",
    },
  ];

  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqIntro reveal">
          <h2>FAQs</h2>
        </div>

        <div className="faqList reveal">
          {faqs.map((item, index) => (
            <details key={index} className="faqItem">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}