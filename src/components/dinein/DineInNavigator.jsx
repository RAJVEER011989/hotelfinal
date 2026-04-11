import { Link } from "react-router-dom";

const banquetMap = {
  dawwat: [
    { title: "Sho-Sha-Roof Top", route: "/dine/sho-sha-rooftop" },
    { title: "Level Up Roof Top", route: "/dine/level-up-terrace-lounge" },
  ],
  shosha: [
    { title: "Dawwat", route: "/dine/daawat-fine-dine" },
    { title: "Level Up Roof Top", route: "/dine/level-up-terrace-lounge" },
  ],
  levelup: [
    { title: "Daawat", route: "/dine/daawat-fine-dine" },
    { title: "Sho-Sha-Roof Top", route: "/dine/sho-sha-rooftop" },
  ],
};

export default function BanquetNavigator({ current }) {
  const items = banquetMap[current] || [];

  return (
    <section className="banquetNavigatorSection">
      <div className="container">
        <div className="banquetNavigatorIntro reveal">
          <h2>Explore Other Dine-In Options</h2>
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