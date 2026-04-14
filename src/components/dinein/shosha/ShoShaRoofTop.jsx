import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";

import ShoShaRoofTopGallery from "./ShoShaRoofTopGallery.jsx";
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
            <h1>Sho-Sha Rooftop</h1>

            <p>
              An elevated rooftop dining experience crafted for memorable evenings,
              scenic ambience, and refined hospitality. A space where atmosphere,
              elegance, and comfort come together beautifully.
            </p>
          </div>
        </div>
      </section>

      <ShoShaRoofTopGallery />

      {/* CLEAN CALL */}
      <DineInHighlights type="shosha" />
      <DineInNavigator current={"shosha"}/>

      <DineInFaqs diningType="shosha" />

      <Footer />
    </>
  );
}