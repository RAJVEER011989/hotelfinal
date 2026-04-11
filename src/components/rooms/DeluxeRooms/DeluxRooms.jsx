
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
              Thoughtfully designed for comfort and calm, our Deluxe Rooms offer
              a refined stay experience with elegant interiors, warm textures,
              and a soothing ambience that feels both luxurious and inviting.
            </p>
          </div>
        </div>
      </section>

      <DeluxeRoomGallery/>
      <RoomHighlights/>
      <RoomsNavigator current={"delux"}/>
      <RoomFAQs/>
      <Footer />
    </>
  );
}