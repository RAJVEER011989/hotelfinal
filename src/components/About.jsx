import { Link } from "react-router-dom";
import logo1 from "../assets/logo/U_only.png";
import Footer from "../components/Footer.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="headlineCenter reveal">
          <div
            className="kicker"
            style={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center" }}
          >
           
          </div>

          <h2>
            Urtth — a destination of refined luxury, crafted for stays, dining,
            weddings, and unforgettable celebrations.
          </h2>

          <div className="centerBtn">
            <Link className="btn outline" to="/about">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}