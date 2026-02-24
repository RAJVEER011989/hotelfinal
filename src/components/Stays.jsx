import { STAYS } from "../data/content.js";

export default function Stays() {
  return (
    <section className="section compact" id="stays">
      <div className="container">
        <div className="headlineCenter reveal" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: "clamp(44px, 5.2vw, 70px)" }}>Room Stays</h2>
          <p style={{ marginTop: 10 }}>Experience comfort and elegance through our exclusive premium stays.</p>
        </div>

        <div className="staysGrid reveal">
          {STAYS.map((s) => (
            <StayCard key={s.title} title={s.title} desc={s.desc} img={s.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StayCard({ title, desc, img }) {
  return (
    <article className="stayCard">
      <div className="img" style={{ backgroundImage: `url('${img}')` }} />
      <div className="scrim" />
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a className="btnMini" href="#book">
          Know More
        </a>
      </div>
    </article>
  );
}