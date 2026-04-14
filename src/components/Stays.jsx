import { STAYS } from "../data/content.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Stays() {
  

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const staysData = isMobile ? [...STAYS, ...STAYS] : STAYS;
  return (
    <section className="section compact" id="stays">
      <div className="container">
        <div className="headlineCenter reveal" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: "clamp(44px, 5.2vw, 70px)" }}>Signature Stays</h2>
          <p style={{ marginTop: 10 }}>URRTH — a stay that stays with you</p>
        </div>

        <div className="staysGrid reveal">
  {staysData.map((s, index) => (
    <StayCard
      key={index}
      title={s.title}
      desc={s.desc}
      img={s.image}
      route={s.route}
    />
  ))}
</div>
      </div>
    </section>
  );
}

function StayCard({ title, desc, img,route }) {
  return (
    <article className="stayCard">
      <div className="img" style={{ backgroundImage: `url('${img}')` }} />
      <div className="scrim" />
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
       <Link to={route} className="signatureDineBtn">
                    Explore
      </Link>
      </div>
    </article>
  );
}