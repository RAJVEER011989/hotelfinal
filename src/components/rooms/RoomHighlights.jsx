import React from "react";
import { roomHighlightsData } from "./RoomHighlightsData";

// Lucide Icons
import {
  Bed,
  Snowflake,
  Tv,
  Wifi,
  Coffee,
  Bath,
  Sparkles,
  Lock,
  Sofa,
  ShieldCheck,
  Baby,
  Utensils,
  Wine,
  Layout,
  Star,
  Briefcase,
  Crown,
  Gem,
  Car,
  Users,
  Heart,
  User,
} from "lucide-react";

// 🔥 ICON MAPPING
const iconMap = {
  bed: Bed,
  "bed-double": Bed,
  snowflake: Snowflake,
  tv: Tv,
  wifi: Wifi,
  coffee: Coffee,
  bath: Bath,
  sparkles: Sparkles,
  lock: Lock,
  sofa: Sofa,
  "shield-check": ShieldCheck,
  baby: Baby,
  utensils: Utensils,
  wine: Wine,
  layout: Layout,
  star: Star,
  briefcase: Briefcase,
  crown: Crown,
  gem: Gem,
  car: Car,
  users: Users,
  heart: Heart,
  user: User,
};

export default function RoomHighlights({ roomType }) {
  const data = roomHighlightsData[roomType];

  if (!data) return null;

  return (
    <section className="roomHighlightsSection">
      <div className="container">
        {/* TITLE */}
        <div className="roomHighlightsIntro">
          <h2>{data.title}</h2>
        </div>

        {/* GROUPS */}
        <div className="roomHighlightsWrap">
          {data.groups.map((group, index) => (
            <div key={index} className="roomHighlightGroup">
              <h4>{group.title}</h4>

              <div className="roomHighlightGrid">
                {group.items.map((item, i) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <div key={i} className="roomHighlightItem">
                      <span className="roomHighlightIcon">
                        {Icon && <Icon size={20} strokeWidth={1.8} />}
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