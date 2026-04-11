import { Link } from "react-router-dom";

import lawnImg from "../assets/partylawn/1.png"
import banquetImg from "../assets/banquets/pearl/1.jpeg";
import corporateImg from "../assets/confrenceroom/1.png";

const experienceData = [
  {
    title: "Party Lawn",
    image: lawnImg,
    route: "/experiences/party-lawn",
  },
  {
    title: "Banquets",
    image: banquetImg,
    route: "/experiences/banquets",
  },
  {
    title: "Conference Rooms",
    image: corporateImg,
    route: "/experiences/corporate-rooms",
  },
];

export default function Experiences() {
  return (
    <section className="section compact" id="experiences">
      <div className="container">
        <div className="headlineCenter reveal big">
          <h2>Experiences</h2>
          <p style={{ marginTop: 10 }}>
            Spaces crafted for celebrations, gatherings, and meaningful experiences.
          </p>
        </div>

        <div className="experienceGrid reveal">
          {experienceData.map((item) => (
            <article key={item.title} className="experienceCard">
              <div
                className="experienceCardBg"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="experienceCardOverlay" />

              <div className="experienceCardContent">
                <div className="experienceCardTop">
                  <h3>{item.title}</h3>
                </div>

                <Link to={item.route} className="experienceBtn">
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}