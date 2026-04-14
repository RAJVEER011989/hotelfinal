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
              A comfortable family room with separate spaces for rest, fun, and time together.
Oversized velvet sofas, city views, and a cozy setting for games and snacks make it ideal for shared moments.
            </p>
          </div>
        </div>
      </section>
<FamilyRoomGallery/>
<RoomHighlights roomType="family"/>
<RoomsNavigator current={"family"}/>
<RoomFAQs roomType="family"/>
 
      <Footer />
    </>
  );
}