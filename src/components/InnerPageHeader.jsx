import { Link } from "react-router-dom";
import SiteMenu from "./SiteMenu.jsx";
import logo from "../assets/logo/TM (2).png";

export default function InnerPageHeader({ dark = false }) {

  return (
    <header className={`innerHeader`}>
  <div className="innerHeaderRow">

    {/* left empty for balance */}
    <div />

    {/* centered logo */}
    <div className="innerHeaderLogo">
  <Link to="/">
    <img src={logo} alt="URRTH" />
  </Link>
</div>

    {/* right menu */}
    <div className="innerHeaderMenu">
      <SiteMenu darkButton={dark}  />
    </div>

  </div>
</header>
  );
}