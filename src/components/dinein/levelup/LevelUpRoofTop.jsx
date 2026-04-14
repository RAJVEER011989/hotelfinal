import FloatingActions from "../../FloatingActions.jsx";
import InnerPageHeader from "../../InnerPageHeader.jsx";
import Footer from "../../Footer.jsx";

import LevelUpRoofTopGallery from "./LevelUpRoofTopGallery.jsx";
import DineInHighlights from "../DineInHighlights.jsx";
import DineInFaqs from "../DineInFaqs.jsx";
import DineInNavigator from "../DineInNavigator.jsx";

export default function ShoShaRooftop() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark/>

      <section className="roomDetailHero">
        <div className="container">
          <div className="roomDetailHeroInner reveal">
            <h1>Level-Up Terrace Lounge with PDR
</h1>

            <p>
              A vibrant terrace lounge designed for relaxed luxury, social energy, and stylish 
              moments. Level-Up offers a contemporary setting with a premium feel, complemented by 
              a private dining area for special occasions and curated experiences.
            </p>
          </div>
        </div>
      </section>

      <LevelUpRoofTopGallery />

      {/* CLEAN CALL */}
      <DineInHighlights type="levelup" />

      <DineInNavigator current={"levelup"}/>

      <DineInFaqs diningType="levelup" />

      <Footer />
    </>
  );
}