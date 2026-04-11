import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";
import RoomHighlights from "../RoomHighlights.jsx";
import RoomFAQs from "../RoomFAQs.jsx";
import FamilyRoomGallery from "./FamilyRoomGallery.jsx";
import RoomsNavigator from "../RoomsNavigator.jsx";



export default function FamilyRoomsPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="roomDetailHero">
        <div className="container">
          <div className="roomDetailHeroInner reveal">
            <h1>Family Rooms</h1>
            <p>
              Created for togetherness, our Family Rooms provide generous space,
              comfort, and convenience for memorable stays with loved ones,
              blending warmth, practicality, and effortless elegance.
            </p>
          </div>
        </div>
      </section>
<FamilyRoomGallery/>
<RoomHighlights/>
<RoomsNavigator current={"family"}/>
<RoomFAQs/>
 
      <Footer />
    </>
  );
}