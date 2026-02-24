import EnquiryForm from "./EnquiryForm.jsx";

export default function BookingContact() {
  return (
    <section className="section" id="book">
      <div className="container">
        <div
          className="panel reveal"
          id="contact"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 16,
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ marginBottom: 10 }}>Booking</h2>
            <h3 style={{ marginBottom: 10 }}>Ready to Plan your Stay ?</h3>
            <p>
              Share your requirement — stay, wedding, event, dining — and we’ll get back with the best package.
            </p>

            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn primary" href="tel:+919000000000">
                Call Now
              </a>
              <a className="btn outline" href="mailto:hello@yourresort.com">
                Email Us
              </a>
              <a className="btn outline" href="#top">
                Back to Top
              </a>
            </div>

            <div style={{ marginTop: 18 }}>
              <EnquiryForm />
            </div>
          </div>

          <div
            style={{
              borderRadius: "var(--r28)",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
              background: "#000",
              minHeight: 520,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.85)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1700&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ position: "absolute", left: 16, right: 16, bottom: 16, color: "white" }}>
              <span className="tag">Flexible plans</span>
              <h3 style={{ marginTop: 10, fontSize: 34 }}>Stay • Celebrate • Repeat</h3>
              <p style={{ marginTop: 6, color: "rgba(255,255,255,.78)" }}>
                Simple, premium, cinematic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}