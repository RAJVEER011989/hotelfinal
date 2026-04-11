import { Link } from "react-router-dom";

import shoshaImg from "../assets/dine/shosha/shosha.jpg";
import levelupImg from "../assets/dine/levelup/levelup.jpg";
import daawatImg from "../assets/dine/dawat/dawat.jpg";

const dineCards = [
  {
    title: "Sho-Sha Rooftop",
    subtitle: "Restaurant with PDR",
    image: shoshaImg,
    route: "/dine/sho-sha-rooftop",
  },
  {
    title: "Level-Up",
    subtitle: "Terrace Lounge with PDR",
    image: levelupImg,
    route: "/dine/level-up-terrace-lounge",
  },
  {
    title: "Daawat",
    subtitle: "Fine Dine Restaurant",
    image: daawatImg,
    route: "/dine/daawat-fine-dine",
  },
];

export default function Dine() {
  return (
    <section className="signatureDineSection" id="dine">
      <div className="container">
        <div className="signatureDineIntro reveal">
          <h2>Dine In</h2>
          <p>
            Discover distinctive dining experiences at URRTH — from rooftop charm
            and terrace evenings to elegant fine dine indulgence.
          </p>
        </div>

        <div className="signatureDineGrid reveal">
          {dineCards.map((item) => (
            <div key={item.title} className="signatureDineCard">
              <div
                className="signatureDineCardBg"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="signatureDineCardOverlay" />

              <div className="signatureDineCardContent">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>

                <Link to={item.route} className="signatureDineBtn">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}