import { Link } from "react-router-dom";

const banquetMap = {
  delux: [
    { title: "Family Rooms", route: "/stays/family-rooms" },
    { title: "Suite Rooms", route: "/stays/suite-rooms" },
    { title: "Presidential Suite", route: "/stays/presidential-suite" },
  ],
  family: [
    { title: "Delux Rooms", route: "/stays/deluxe-rooms" },
    { title: "Suite Rooms", route: "/stays/suite-rooms" },
    { title: "Presidential Suite", route: "/stays/presidential-suite" },
  ],
  suite: [
    { title: "Delux Rooms", route: "/stays/deluxe-rooms" },
    { title: "Suite Rooms", route: "/stays/suite-rooms" },
    { title: "Presidential Suite", route: "/stays/presidential-suite" },
  ],presidential: [
    { title: "Family Rooms", route: "/stays/family-rooms" },
    { title: "Suite Rooms", route: "/stays/suite-rooms" },
    { title: "Delux Rooms", route: "/stays/deluxe-rooms" },
  ],
};

export default function BanquetNavigator({ current }) {
  const items = banquetMap[current] || [];

  return (
    <section className="banquetNavigatorSection">
      <div className="container">
        <div className="banquetNavigatorIntro reveal">
          <h2>Explore Other Stays</h2>
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