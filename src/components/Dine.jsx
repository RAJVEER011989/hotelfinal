import { useMemo, useState } from "react";
import { DINE_DATA } from "../data/content.js";

export default function Dine() {
  const [dineKey, setDineKey] = useState("restaurant");
  const dine = useMemo(() => DINE_DATA[dineKey], [dineKey]);

  return (
    <section className="section" id="dine">
      <div className="container">
        <div className="headlineCenter reveal" style={{ maxWidth: 900 }}>
          <h2>Dine Innnnn</h2>
          <p style={{ marginTop: 10 }}>From poolside brunch to golden hour sips..</p>
        </div>

        <div className="split">
          <div className="panel reveal">
            <h3 style={{ marginBottom: 6 }}>Choose an outlet</h3>
            <p className="muted">This is the same tab idea as the reference site.</p>

            <div className="tabs" role="tablist" aria-label="Dining options">
              <Tab label="Restaurant" active={dineKey === "restaurant"} onClick={() => setDineKey("restaurant")} />
              <Tab label="Café" active={dineKey === "cafe"} onClick={() => setDineKey("cafe")} />
              <Tab label="Pub" active={dineKey === "pub"} onClick={() => setDineKey("pub")} />
              <Tab label="Bakery" active={dineKey === "bakery"} onClick={() => setDineKey("bakery")} />
            </div>

            <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn primary" href="#book">
                Reserve a Table
              </a>
              <a className="btn outline" href="#gallery">
                See Gallery
              </a>
            </div>
          </div>

          <div className="dinePreview reveal" aria-live="polite">
            <div className="img" style={{ backgroundImage: `url('${dine.img}')` }} />
            <div className="scrim" />
            <div className="content">
              <span className="tag">{dine.tag}</span>
              <h3 style={{ marginTop: 10, fontSize: 34 }}>{dine.title}</h3>
              <p style={{ marginTop: 8, color: "rgba(255,255,255,.78)" }}>{dine.desc}</p>
              <div style={{ marginTop: 14 }}>
                <a className="btn primary" href="#book">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      className={`tab ${active ? "active" : ""}`}
      role="tab"
      aria-selected={active ? "true" : "false"}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}