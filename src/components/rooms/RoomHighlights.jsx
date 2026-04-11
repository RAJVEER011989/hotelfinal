import {
  BedDouble,
  Wind,
  Tv,
  Coffee,
  Wifi,
  Briefcase,
  Bath,
  Droplets,
  Shirt,
  Phone,
  ConciergeBell
} from "lucide-react";

export default function RoomHighlights() {
  return (
    <section className="roomHighlightsSection">
      <div className="container">

        <div className="roomHighlightsIntro reveal">
          <h2>Room Highlights</h2>
        </div>

        <div className="roomHighlightsWrap reveal">

          {/* Comforts */}
          <div className="roomHighlightGroup">
            <h4>In-Room Comforts</h4>

            <div className="roomHighlightGrid">
              <Amenity icon={<BedDouble size={20} />} label="King / Twin Bed" />
              <Amenity icon={<Wind size={20} />} label="Air Conditioning" />
              <Amenity icon={<Tv size={20} />} label="Smart TV" />
              <Amenity icon={<Coffee size={20} />} label="Tea & Coffee" />
              <Amenity icon={<Wifi size={20} />} label="High-Speed Wi-Fi" />
              <Amenity icon={<Briefcase size={20} />} label="Work Desk" />
            </div>
          </div>

          {/* Essentials */}
          <div className="roomHighlightGroup">
            <h4>Essentials</h4>

            <div className="roomHighlightGrid">
              <Amenity icon={<Bath size={20} />} label="Elegant Bathroom" />
              <Amenity icon={<Droplets size={20} />} label="Hot & Cold Water" />
              <Amenity icon={<Shirt size={20} />} label="Wardrobe Space" />
              <Amenity icon={<Phone size={20} />} label="In-room Telephone" />
              <Amenity icon={<ConciergeBell size={20} />} label="Room Service" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Item */
function Amenity({ icon, label }) {
  return (
    <div className="roomHighlightItem">
      <span className="roomHighlightIcon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}