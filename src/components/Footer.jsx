export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footerPanel reveal">
          <div className="footerGrid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span className="leafMark" aria-hidden="true" />
                <strong style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22 }}>
                  Evergreen Retreat
                </strong>
              </div>
              <p className="muted">Maira-style header overlay + screensaver hero + seamless sections (no lines).</p>
              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn outline" href="#book">
                  Book
                </a>
                <a className="btn outline" href="#gallery">
                  Gallery
                </a>
              </div>
            </div>

            <div>
              <h4>Explore</h4>
              <a href="#about">About</a>
              <a href="#stays">Room Stays</a>
              <a href="#dine">Dine</a>
            </div>

            <div>
              <h4>Contact</h4>
              <a href="tel:+919479282528">+91 9479282528</a>
              <a href="mailto:hello@yourresort.com">hello@yourresort.com</a>
              <a href="#book">Booking</a>
            </div>

            <div>
              <h4>Location</h4>
              <a href="#top">Bhilai, India</a>
              <a href="#top">Open in Maps</a>
              <a href="#top">Instagram</a>
            </div>
          </div>

          <div className="footerBottom">
            <div>© {year} Evergreen Retreat. All rights reserved.</div>
            <div className="muted">No seams • No lines • Soft luxury</div>
          </div>
        </div>
      </div>
    </footer>
  );
}