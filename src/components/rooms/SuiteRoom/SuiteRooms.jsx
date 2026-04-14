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
              A peaceful suite with elegant interiors and a comfortable lounge. Complete with plush seating and a jacuzzi for a relaxing, spa-like experience.
            </p>
          </div>
        </div>
      </section>
      <SuiteRoomGallery/>
      <RoomHighlights roomType="suite"/>
      <RoomsNavigator current={"suite"}/>

      <RoomFAQs roomType="suite" />

      <Footer />
    </>
  );
}