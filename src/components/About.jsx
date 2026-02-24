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
            Evergreen Retreat & Convention Centre — a haven of serene luxury, crafted for stays, dining, weddings,{" "}
            <span >and unforgettable events.</span>
          </h2>

          <div className="centerBtn">
            <a className="btn outline" href="#stays">
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}