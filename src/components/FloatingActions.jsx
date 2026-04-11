import { Link } from "react-router-dom";
export default function FloatingActions() {
  return (
    <>
      <div className="sidePills" aria-label="Quick actions">
        <Link to="/enquiry" className="sidePill" href="#contact">
          Enquiry
        </Link>
        <Link to="/enquiry" className="sidePill" href="#book">
          Room Booking
        </Link>
      </div>

      <a
        className="wa"
        href="https://wa.me/919479282528"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 11.5a8 8 0 0 1-12.3 6.9L4 19l.7-3.5A8 8 0 1 1 20 11.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.7 9.3c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.4.4c.4.7 1 1.4 1.7 1.8l.4-.4c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.4.6-.4.2-1.3.6-2.6.1-1.3-.5-2.6-1.9-3.2-2.6-.7-.8-1.9-2.8-2.1-3.9-.2-1.1.2-1.9.4-2.3Z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
}