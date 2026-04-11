import { Link } from "react-router-dom";

const banquetMap = {
  emerald: [
    { title: "Sapphire", route: "/experiences/banquets/sapphire" },
    { title: "Pearl", route: "/experiences/banquets/pearl" },
  ],
  sapphire: [
    { title: "Emerald", route: "/experiences/banquets/emerald" },
    { title: "Pearl", route: "/experiences/banquets/pearl" },
  ],
  pearl: [
    { title: "Emerald", route: "/experiences/banquets/emerald" },
    { title: "Sapphire", route: "/experiences/banquets/sapphire" },
  ],
};

export default function BanquetNavigator({ current }) {
  const items = banquetMap[current] || [];

  return (
    <section className="banquetNavigatorSection">
      <div className="container">
        <div className="banquetNavigatorIntro reveal">
          <h2>Explore Other Banquet Venues</h2>
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