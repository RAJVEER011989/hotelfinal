import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";
import SuiteRoomGallery from "./PresidentialSuiteRoomGallery.jsx";
import RoomHighlights from "../RoomHighlights.jsx";
import RoomFAQs from "../RoomFAQs.jsx";
import PresidentialSuiteGallery from "./PresidentialSuiteRoomGallery.jsx";
import RoomsNavigator from "../RoomsNavigator.jsx";

export default function PresidentialSuiteRooms() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="roomDetailHero">
        <div className="container">
          <div className="roomDetailHeroInner reveal">
            <h1>Presidential Suite</h1>
            <p>
              A signature Presidential Suite offering spacious living, refined interiors, and seamless modern comfort.
With dedicated areas for dining, work, plush seating, and a private jacuzzi, it defines true luxury.
            </p>
          </div>
        </div>
      </section>
      <PresidentialSuiteGallery/>


      <RoomHighlights roomType="presidential"/>

      <RoomsNavigator current={"presidential"}/>

      <RoomFAQs roomType="presidential" />
  

      <Footer />
    </>
  );
}