import {
  CarFront,
  Coffee,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  Gamepad2,
  HeartPulse,
  Armchair,
} from "lucide-react";

const iconMap = {
  CarFront,
  Coffee,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  Gamepad2,
  HeartPulse,
  Armchair,
};

export default function FacilitiesHighlights() {
  const data = [
    {
      title: "Comfort & Convenience",
      items: [
        { icon: "CarFront", label: "Parking · 40000 sq ft" },
        { icon: "Gamepad2", label: "Professionally Developed Kids Soft Zone" },
        { icon: "Coffee", label: "Inviting Coffee Experience" },
        { icon: "ShieldCheck", label: "Designed for Guest Convenience" },
        { icon: "Armchair", label: "Relaxed Everyday Comforts" },
      ],
    },
    {
      title: "Wellness & Lifestyle",
      items: [
        { icon: "HeartPulse", label: "Spa for Relaxation" },
        { icon: "Dumbbell", label: "Dedicated Fitness Space" },
        { icon: "Sparkles", label: "Premium Everyday Experience" },
        { icon: "Users", label: "Family-Friendly Environment" },
        { icon: "Trees", label: "Balanced Leisure & Wellness Feel" },
      ],
    },
  ];

  return (
    <section className="roomHighlightsSection">
      <div className="container">
        <div className="roomHighlightsIntro reveal">
          <h2>Highlights</h2>
        </div>

        <div className="roomHighlightsWrap reveal">
          {data.map((group) => (
            <div key={group.title} className="roomHighlightGroup">
              <h4>{group.title}</h4>

              <div className="roomHighlightGrid">
                {group.items.map((item) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <div key={item.label} className="roomHighlightItem">
                      <span className="roomHighlightIcon">
                        {Icon ? <Icon size={20} strokeWidth={1.7} /> : null}
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