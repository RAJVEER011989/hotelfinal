import {
  Armchair,
  Building2,
  Coffee,
  GlassWater,
  Lamp,
  Mountain,
  Music4,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

const iconMap = {
  Armchair,
  Building2,
  Coffee,
  GlassWater,
  Lamp,
  Mountain,
  Music4,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wine,
};

export default function DineInHighlights({ type }) {
  const data = {
    shosha: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "Mountain", label: "Rooftop Dining Ambience" },
          { icon: "Sparkles", label: "Elegant Evening Setting" },
          { icon: "Lamp", label: "Warm Ambient Lighting" },
          { icon: "Music4", label: "Relaxed Premium Atmosphere" },
          { icon: "Users", label: "Ideal for Gatherings" },
          { icon: "Building2", label: "Private Dining Room" },
        ],
      },
      {
        title: "Dining Comforts",
        items: [
          { icon: "UtensilsCrossed", label: "Curated Dining Experience" },
          { icon: "Wine", label: "Celebration-Friendly Setting" },
          { icon: "Coffee", label: "Refined Service Experience" },
          { icon: "GlassWater", label: "Comfortable Table Layout" },
          { icon: "Armchair", label: "Premium Seating" },
        ],
      },
    ],

    levelup: [
      {
        title: "Ambience & Experience",
        items: [
          { icon: "Sparkles", label: "Modern Lounge Vibe" },
          { icon: "Music4", label: "Energetic Atmosphere" },
          { icon: "Users", label: "Perfect for Social Evenings" },
          { icon: "Building2", label: "Private Dining Room" },
        ],
      },
      {
    title: "Dining Comforts",
    items: [
      { icon: "UtensilsCrossed", label: "Curated Fine Dining Experience" },
      { icon: "Armchair", label: "Comfortable Premium Seating" },
      { icon: "GlassWater", label: "Well-Spaced Table Layout" },
      { icon: "Coffee", label: "Attentive Service Experience" },
      { icon: "Sparkles", label: "Hygienic & Premium Environment" },
    ],
  },
    ],

    daawat: [
  {
    title: "Ambience & Experience",
    items: [
      { icon: "Sparkles", label: "Elegant Fine Dining Ambience" },
      { icon: "Lamp", label: "Warm Indoor Lighting" },
      { icon: "Users", label: "Perfect for Family Dining" },
      { icon: "Building2", label: "Refined Indoor Setting" },
      { icon: "Music4", label: "Calm & Sophisticated Atmosphere" },
      { icon: "Wine", label: "Ideal for Special Occasions" },
    ],
  },
  {
    title: "Dining Comforts",
    items: [
      { icon: "UtensilsCrossed", label: "Curated Fine Dining Experience" },
      { icon: "Armchair", label: "Comfortable Premium Seating" },
      { icon: "GlassWater", label: "Well-Spaced Table Layout" },
      { icon: "Coffee", label: "Attentive Service Experience" },
      { icon: "Sparkles", label: "Hygienic & Premium Environment" },
    ],
  },
],
  };

  const groups = data[type] || [];

  return (
    <section className="roomHighlightsSection">
      <div className="container">
        <div className="roomHighlightsIntro reveal">
          <h2>Dining Highlights</h2>
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