import { useState } from "react";
import footerLogo from "../assets/logo/TM (2).png";
import footerTagline from "../assets/logo/tag (2).png";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="footerLuxury">
      <div className="container footerLuxuryInner">
        <div className="footerTaglineImg">
          <img src={footerTagline} alt="Celebrate Every Occasion" />
        </div>

        {/* Desktop footer */}
        <div className="footerLuxuryGrid footerDesktop">
          <div>
            <h4>Stays</h4>
            <Link to="/stays/deluxe-rooms" >Deluxe Rooms</Link>
            <Link to="/stays/family-rooms" >Family Rooms</Link>
            <Link to="/stays/suite-rooms" >Suite Rooms</Link>
            <Link to="/stays/presidential-suite" >Presidential Suite</Link>
          </div>

          <div>
            <h4>Experiences</h4>
            <Link to="/experiences/banquets" >Banquets</Link>
            <Link to="/experiences/party-lawn" >Party Lawn</Link>
            <Link to="/experiences/conference" >Conference Room</Link>
          </div>

          <div>
            <h4>Dine In</h4>
            <Link to="/dine/sho-sha-rooftop" >Sho-Sha Rooftop</Link>
            <Link to="/dine/level-up-terrace-lounge" >Level-Up Lounge</Link>
            <Link to="/dine/daawat-fine-dine" >Daawat Fine Dine Restaurant</Link>
          </div>

          <div>
            <h4>Contact Us</h4>
            <a href="tel:+919479282528">+91 9479282528</a>
            <a href="mailto:info@urrthhotels.com">info@urrthhotels.com</a>
            <Link to="/enquiry">Enquiry</Link>
          </div>
        </div>

        {/* Mobile accordion footer */}
        <div className="footerMobileAccordion">
          <div className="footerAccItem">
            <button
              className={`footerAccHead ${openSection === "stays" ? "open" : ""}`}
              onClick={() => toggleSection("stays")}
              type="button"
            >
              <span>Stays</span>
              <ChevronDown size={20} />
            </button>
            <div className={`footerAccBody ${openSection === "stays" ? "open" : ""}`}>
              <Link to="/stays/deluxe-rooms" >Deluxe Rooms</Link>
            <Link to="/stays/family-rooms" >Family Rooms</Link>
            <Link to="/stays/suite-rooms" >Suite Rooms</Link>
            <Link to="/stays/presidential-suite" >Presidential Suite</Link>
            </div>
          </div>

          <div className="footerAccItem">
            <button
              className={`footerAccHead ${openSection === "experiences" ? "open" : ""}`}
              onClick={() => toggleSection("experiences")}
              type="button"
            >
              <span>Experiences</span>
              <ChevronDown size={20} />
            </button>
            <div className={`footerAccBody ${openSection === "experiences" ? "open" : ""}`}>
              <Link to="/experiences/banquets" >Banquets</Link>
            <Link to="/experiences/party-lawn" >Party Lawn</Link>
            <Link to="/experiences/conference" >Conference Room</Link>
            </div>
          </div>

          <div className="footerAccItem">
            <button
              className={`footerAccHead ${openSection === "dine" ? "open" : ""}`}
              onClick={() => toggleSection("dine")}
              type="button"
            >
              <span>Dine In</span>
              <ChevronDown size={20} />
            </button>
            <div className={`footerAccBody ${openSection === "dine" ? "open" : ""}`}>
              <Link to="/dine/sho-sha-rooftop" >Sho-Sha Rooftop</Link>
            <Link to="/dine/level-up-terrace-lounge" >Level-Up Lounge</Link>
            <Link to="/dine/daawat-fine-dine" >Daawat Fine Dine Restaurant</Link>
            </div>
          </div>

          <div className="footerAccItem">
            <button
              className={`footerAccHead ${openSection === "links" ? "open" : ""}`}
              onClick={() => toggleSection("links")}
              type="button"
            >
              <span>Links</span>
              <ChevronDown size={20} />
            </button>
            <div className={`footerAccBody ${openSection === "links" ? "open" : ""}`}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/enquiry">Enquiry</Link>
            </div>
          </div>

          <div className="footerAccItem">
            <button
              className={`footerAccHead ${openSection === "contact" ? "open" : ""}`}
              onClick={() => toggleSection("contact")}
              type="button"
            >
              <span>Contact Us</span>
              <ChevronDown size={20} />
            </button>
            <div className={`footerAccBody ${openSection === "contact" ? "open" : ""}`}>
              <a href="tel:+917222902226">+91 7222902226</a>
              <a href="mailto:info@urrthhotels.com">info@urrthhotels.com</a>
              <Link to="/enquiry">Send Enquiry</Link>
            </div>
          </div>
        </div>

        <div className="footerCenterLogo">
          <img src={footerLogo} alt="URRTH" />
        </div>

        <div className="footerBottomLuxury">
          <div>© 2026 URRTH. All rights reserved.</div>
          <div className="footerLegalLinks">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookies-policy">Cookies Policy</a>
          </div>
          <div className="footerCredit">Made with 🤍 by Truelip Technologies</div>
        </div>
      </div>
    </footer>
  );
}