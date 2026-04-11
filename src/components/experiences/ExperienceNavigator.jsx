import { Link } from "react-router-dom";
import Conference from "./Conference";

const experienceMap = {
  partylawn: [
    { title: "Banquets", route: "/experiences/banquets" },
    { title: "Conference Room", route: "/experiences/conference" },
  ],
  conference: [
    { title: "Banquets", route: "/experiences/banquets" },
    { title: "Party Lawn", route: "/experiences/party-lawn" },
  ],
  banquets: [
    { title: "Party Lawn", route: "/experiences/party-lawn"},
    { title: "Conference Room", route: "/experiences/conference" },
  ],
};

export default function BanquetNavigator({ current }) {
  const items = experienceMap[current] || [];

  return (
    <section className="banquetNavigatorSection">
      <div className="container">
        <div className="banquetNavigatorIntro reveal">
          <h2>Explore Other Experiences</h2>
        </div>

        <div className="banquetNavigatorList reveal">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.route}
              className="banquetNavigatorLink"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}