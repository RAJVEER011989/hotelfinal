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
              The Presidential Suite is the finest expression of URRTH hospitality — 
              an exclusive, grand, and beautifully crafted space for those seeking 
              a stay marked by prestige, indulgence, and timeless elegance.
            </p>
          </div>
        </div>
      </section>
      <PresidentialSuiteGallery/>


      <RoomHighlights/>

      <RoomsNavigator current={"presidential"}/>

      <RoomFAQs />
  

      <Footer />
    </>
  );
}