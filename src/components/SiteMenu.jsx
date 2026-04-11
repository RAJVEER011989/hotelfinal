import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import logo from "../assets/logo/TM (2).png";

export default function SiteMenu({ darkButton = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuOverlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div className="siteFullMenu">
            <button
              className="siteFullMenuClose"
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <div className="siteFullMenuInner">
              <Link
                to="/"
                className="siteFullMenuLogo"
                onClick={() => setOpen(false)}
              >
                <img src={logo} alt="Urrth" className="siteFullMenuLogoImg" />
              </Link>

             <nav className="siteFullMenuNav" aria-label="Main menu">
  <div className="menuCol">
    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
    <Link to="/stays" onClick={() => setOpen(false)}>Stay</Link>
   
    
    
  </div>

  <div className="menuCol">
     <Link to="/dine" onClick={() => setOpen(false)}>Dine In</Link>
    <Link to="/experiences" onClick={() => setOpen(false)}>Experience</Link>
    <Link to="/facilities" onClick={() => setOpen(false)}>Facilities</Link>
  </div>
</nav>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        className={`menuBtn ${darkButton ? "menuBtnDark" : ""}`}
        type="button"
        aria-label="Open menu"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(true)}
      >
        Menu
        <span className="burger" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      {menuOverlay}
    </>
  );
}