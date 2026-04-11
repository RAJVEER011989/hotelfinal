import logo from "../assets/logo/TM (2).png";
import tagline from "../assets/logo/tag (2).png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footerLuxury">
      <div className="container footerLuxuryInner">
        <div className="footerTaglineImg">
          <img src={tagline} alt="Celebrate Every Occasion" />
        </div>

        <div className="footerLuxuryGrid">
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
            <h4>Dine</h4>
            <Link to="/dine/sho-sha-rooftop" >Sho-Sha Rooftop</Link>
            <Link to="/dine/level-up-terrace-lounge" >Level-Up Lounge</Link>
            <Link to="/dine/daawat-fine-dine" >Daawat Fine Dine Restaurant</Link>
          </div>

          <div>
            <h4>Contact Us</h4>

            <a href="tel:+919479282528" className="footerContactItem">
              <span className="footerIcon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              +91 9479282528
            </a>

            <a href="mailto:@urrth.com" className="footerContactItem">
              <span className="footerIcon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              info@urrthhotels.com
            </a>

            <div className="footerContactItem">
              <span className="footerIcon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </span>
              Rajnandgaon, Chhattisgarh
            </div>
          </div>
        </div>

        <div className="footerCenterLogo">
          <img src={logo} alt="Urtth" />
        </div>

        <div className="footerBottomLuxury">
          <span>© 2026 Urtth. All rights reserved.</span>
          <span className="footerCredit">Designed & developed by Truelip Technologies</span>
        </div>
      </div>
    </footer>
  );
}