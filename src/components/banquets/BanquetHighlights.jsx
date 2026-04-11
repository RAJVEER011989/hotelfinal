import {
  Sparkles,
  Users,
  Building2,
  Armchair,
  Lamp,
  UtensilsCrossed,
} from "lucide-react";

const iconMap = {
  Sparkles,
  Users,
  Building2,
  Armchair,
  Lamp,
  UtensilsCrossed,
};

export default function BanquetHighlights({ type }) {
  const data = {
    emerald: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "Sparkles", label: "Grand Event Ambience" },
          { icon: "Users", label: "Ideal for Large Gatherings" },
          { icon: "Building2", label: "Expansive Indoor Venue" },
        ],
      },
      {
        title: "Dining Comforts",
        items: [
          { icon: "Armchair", label: "Spacious Seating Layout" },
          { icon: "Lamp", label: "Elegant Lighting Setup" },
          { icon: "UtensilsCrossed", label: "Premium Event Experience" },
        ],
      },
    ],

    sapphire: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "Sparkles", label: "Elegant Event Setting" },
          { icon: "Users", label: "Perfect for Social Gatherings" },
          { icon: "Building2", label: "Balanced Venue Space" },
        ],
      },
      {
        title: "Dining Comforts",
        items: [
          { icon: "Armchair", label: "Comfortable Seating" },
          { icon: "Lamp", label: "Warm Lighting" },
          { icon: "UtensilsCrossed", label: "Curated Experience" },
        ],
      },
    ],

    pearl: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "Sparkles", label: "Intimate Event Ambience" },
          { icon: "Users", label: "Ideal for Small Gatherings" },
          { icon: "Building2", label: "Private Venue Feel" },
        ],
      },
      {
        title: "Dining Comforts",
        items: [
          { icon: "Armchair", label: "Cozy Seating Setup" },
          { icon: "Lamp", label: "Soft Lighting" },
          { icon: "UtensilsCrossed", label: "Premium Service Experience" },
        ],
      },
    ],
  };

  const groups = data[type] || [];

  return (
    <section className="roomHighlightsSection">
      <div className="container">
        <div className="roomHighlightsIntro reveal">
          <h2>Highlights</h2>
        </div>

        <div className="roomHighlightsWrap reveal">
          {groups.map((group) => (
            <div key={group.title} className="roomHighlightGroup">
              <h4>{group.title}</h4>

              <div className="roomHighlightGrid">
                {group.items.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.label} className="roomHighlightItem">
                      <span className="roomHighlightIcon">
                        {Icon && <Icon size={20} />}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}