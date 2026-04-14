
import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";
import RoomsNavigator from "../RoomsNavigator.jsx";



import RoomHighlights from "../RoomHighlights.jsx";
import RoomFAQs from "../RoomFAQs.jsx";
import DeluxeRoomGallery from "./DeluxeRoomGallery.jsx";


export default function DeluxeRoomPage() {
  

  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="roomDetailHero">
        <div className="container">
          <div className="roomDetailHeroInner reveal">
            <h1>Deluxe Rooms</h1>
            <p>
              A refined space designed for comfort, simplicity, and effortless relaxation.
With elegant interiors and a calm setting, it offers a perfect personal retreat.
            </p>
          </div>
        </div>
      </section>

      <DeluxeRoomGallery/>
      <RoomHighlights roomType="deluxe"/>
      <RoomsNavigator current={"delux"}/>
      <RoomFAQs roomType="deluxe"/>
      <Footer />
    </>
  );
}