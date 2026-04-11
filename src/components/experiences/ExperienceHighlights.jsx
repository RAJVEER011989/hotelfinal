import {
  Armchair,
  Building2,
  Lamp,
  Sparkles,
  Trees,
  Users,
  UtensilsCrossed,
  BriefcaseBusiness,
  Presentation,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  Armchair,
  Building2,
  Lamp,
  Sparkles,
  Trees,
  Users,
  UtensilsCrossed,
  BriefcaseBusiness,
  Presentation,
  ShieldCheck,
};

export default function ExperienceHighlights({ type }) {
  const data = {
    partylawn: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "Trees", label: "1 Acre Open-Air Venue" },
          { icon: "Sparkles", label: "Grand Celebration Ambience" },
          { icon: "Users", label: "Ideal for Large Gatherings" },
          { icon: "Lamp", label: "Beautiful Evening Atmosphere" },
          { icon: "Building2", label: "Perfect for Wedding Functions" },
        ],
      },
      {
        title: "Event Comforts",
        items: [
          { icon: "Armchair", label: "Spacious Layout" },
          { icon: "UtensilsCrossed", label: "Celebration-Friendly Setting" },
          { icon: "ShieldCheck", label: "Organized Event Experience" },
        ],
      },
    ],
    conference: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "BriefcaseBusiness", label: "Professional Meeting Setting" },
          { icon: "Sparkles", label: "Refined Indoor Ambience" },
          { icon: "Users", label: "12 Seater Capacity" },
          { icon: "Building2", label: "Private Discussion Space" },
        ],
      },
      {
        title: "Meeting Comforts",
        items: [
          { icon: "Armchair", label: "Comfortable Seating" },
          { icon: "Presentation", label: "Ideal for Presentations" },
          { icon: "ShieldCheck", label: "Focused Business Environment" },
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
                        {Icon ? <Icon size={20} /> : null}
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