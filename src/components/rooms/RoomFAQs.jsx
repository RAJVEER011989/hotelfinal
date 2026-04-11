export default function RoomFAQs() {
  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqIntro reveal">
          <h2>FAQs</h2>
        </div>

        <div className="faqList reveal">
          <details className="faqItem">
            <summary>What amenities are included in Deluxe Rooms?</summary>
            <p>
              Deluxe Rooms include premium bedding, air conditioning, high-speed Wi-Fi,
              smart TV, tea & coffee setup, elegant bathroom, and thoughtfully designed interiors.
            </p>
          </details>

          <details className="faqItem">
            <summary>Are Deluxe Rooms suitable for couples or business stays?</summary>
            <p>
              Yes, Deluxe Rooms are ideal for both leisure and business travellers,
              offering a perfect balance of comfort, privacy, and functionality.
            </p>
          </details>

          <details className="faqItem">
            <summary>Do Deluxe Rooms offer a scenic or premium view?</summary>
            <p>
              Select Deluxe Rooms offer a pleasant ambience and refined setting,
              enhancing the overall stay experience.
            </p>
          </details>

          <details className="faqItem">
            <summary>Is room service available for Deluxe Rooms?</summary>
            <p>
              Yes, room service is available to ensure a comfortable and seamless stay experience.
            </p>
          </details>

          <details className="faqItem">
            <summary>Can I request early check-in for Deluxe Rooms?</summary>
            <p>
              Early check-in and late check-out requests are subject to availability
              and can be arranged upon request.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}