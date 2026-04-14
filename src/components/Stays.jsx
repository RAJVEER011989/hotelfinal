import { STAYS } from "../data/content.js";
import { Link } from "react-router-dom";


export default function Stays() {



  return (
   <section className="section compact" id="stays">
  <div className="container">
    <div className="headlineCenter reveal" style={{ maxWidth: 900 }}>
      <h2 style={{ fontSize: "clamp(44px, 5.2vw, 70px)" }}>Signature Stays</h2>
      <p style={{ marginTop: 10 }}>URRTH — a stay that stays with you</p>
    </div>

    <div className="staysDesktop reveal">
      <div className="staysGrid">
        {STAYS.map((s) => (
          <StayCard
            key={s.title}
            title={s.title}
            desc={s.desc}
            img={s.image}
            route={s.route}
          />
        ))}
      </div>
    </div>

    <div className="staysMobileSlider reveal">
      <div className="staysMobileTrack">
        {[...STAYS, ...STAYS].map((s, index) => (
          <div className="staysMobileCard" key={`${s.title}-${index}`}>
            <StayCard
              title={s.title}
              desc={s.desc}
              img={s.image}
              route={s.route}
            />
          </div>
        ))}
      </div>
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