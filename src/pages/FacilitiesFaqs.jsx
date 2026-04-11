export default function FacilitiesFaqs() {
  const faqs = [
    {
      question: "What facilities are available at URRTH?",
      answer:
        "URRTH offers spacious parking, a professionally developed kids play area, spa, gym, and coffee shop facilities designed to complement the guest experience.",
    },
    {
      question: "How large is the parking area?",
      answer:
        "The parking facility spans approximately 40000 sq ft, offering ample space for guest convenience and event-related requirements.",
    },
    {
      question: "Is the kids play area designed specifically for children?",
      answer:
        "Yes, the kids play area is a professionally developed soft zone created to provide a safe, playful, and enjoyable environment for children.",
    },
    {
      question: "Does URRTH offer wellness and fitness facilities?",
      answer:
        "Yes, guests can enjoy both a spa for relaxation and a gym for fitness within the property.",
    },
    {
      question: "Is there a coffee shop within the property?",
      answer:
        "Yes, URRTH includes a coffee shop designed as a warm and inviting space for relaxed breaks and casual moments.",
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