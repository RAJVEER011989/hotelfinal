import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";

import DaawatGallery from "./DaawatGallery.jsx";
import DineInHighlights from "../DineInHighlights.jsx";
import DineInFaqs from "../DineInFaqs.jsx";
import DineInNavigator from "../DineInNavigator.jsx";

export default function ShoShaRooftop() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <section className="roomDetailHero">
        <div className="container">
          <div className="roomDetailHeroInner reveal">
            <h1>Daawat Fine Dine Restaurant
</h1>

            <p>
              An elegant fine dining space where rich flavours, 
              graceful service, and timeless ambience come together. Daawat is designed for meaningful 
              family meals, celebratory dining, and refined culinary experiences.
            </p>
          </div>
        </div>
      </section>

      <DaawatGallery />

      {/* CLEAN CALL */}
      <DineInHighlights type="daawat" />

      <DineInNavigator current={"dawwat"}/>

      <DineInFaqs type="shosha" />

      <Footer />
    </>
  );
}