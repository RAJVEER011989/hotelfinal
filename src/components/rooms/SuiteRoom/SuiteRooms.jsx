import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";
import SuiteRoomGallery from "./SuiteRoomGallery.jsx";
import RoomHighlights from "../RoomHighlights.jsx";
import RoomFAQs from "../RoomFAQs.jsx";
import RoomsNavigator from "../RoomsNavigator.jsx";

export default function SuiteRooms() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="roomDetailHero">
        <div className="container">
          <div className="roomDetailHeroInner reveal">
            <h1>Suite Rooms</h1>
            <p>
              Our Suite Rooms bring together style, space, and sophistication,
              offering an elevated hospitality experience with beautifully curated
              interiors for guests who appreciate refined comfort.
            </p>
          </div>
        </div>
      </section>
      <SuiteRoomGallery/>
      <RoomHighlights/>
      <RoomsNavigator current={"suite"}/>

      <RoomFAQs />

      <Footer />
    </>
  );
}