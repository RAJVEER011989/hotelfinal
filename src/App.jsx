import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import BackgroundMusic from "./components/BackgroundMusic.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import StaysPage from "./pages/StaysPage.jsx";
import DinePage from "./pages/DinePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import DeluxeRoomPage from "./components/rooms/DeluxeRooms/DeluxRooms.jsx";
import FamilyRoomsPage from "./components/rooms/FamilyRooms/FamilyRooms.jsx";
import SuiteRoomsPage from "./components/rooms/SuiteRoom/SuiteRooms.jsx";
import PresidentialSuiteRoomsPage from "./components/rooms/PresidentialSuiteRoom/PresidentialSuite.jsx";
import ShoShaRoofTopPage from "./components/dinein/shosha/ShoShaRoofTop.jsx";
import DaawatPage from "./components/dinein/dawat/Daawat.jsx";
import LevelUpRoofTopPage from "./components/dinein/levelup/LevelUpRoofTop.jsx";
import ExperiencesPage from "./pages/ExperiencesPage.jsx";
import BanquetsPage from "./components/experiences/BanquetsPage.jsx";
import EmeraldPage from "./components/banquets/emerald/Emerald.jsx";
import Sapphire from "./components/banquets/sapphire/Sapphire.jsx";
import Pearl from "./components/banquets/pearl/Pearl.jsx";
import PartyLawn from "./components/experiences/PartyLawn.jsx";
import Conference from "./components/experiences/Conference.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";
import PartyLawnAndConferencePage from "./components/experiences/PartyLawnAndConference.jsx";
import EnquiryPage from "./pages/EnquiryPage.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => {
      el.classList.remove("in");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stays" element={<StaysPage />} />
        <Route path="/dine" element={<DinePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/stays/deluxe-rooms" element={<DeluxeRoomPage />} />
        <Route path="/stays/family-rooms" element={<FamilyRoomsPage />} />
        <Route path="/stays/suite-rooms" element={<SuiteRoomsPage />} />
        <Route
          path="/stays/presidential-suite"
          element={<PresidentialSuiteRoomsPage />}
        />
        <Route path="/dine/sho-sha-rooftop" element={<ShoShaRoofTopPage />} />
        <Route path="/dine/daawat-fine-dine" element={<DaawatPage />} />
        <Route
          path="/dine/level-up-terrace-lounge"
          element={<LevelUpRoofTopPage />}
        />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/experiences/banquets" element={<BanquetsPage />} />
        <Route path="/experiences/banquets/emerald" element={<EmeraldPage />} />
        <Route path="/experiences/banquets/sapphire" element={<Sapphire />} />
        {/* <Route
          path="/experiences/party-lawn-conference"
          element={<PartyLawnAndConferencePage />}
        /> */}
        <Route path="/experiences/banquets/pearl" element={<Pearl />} />
        <Route path="/experiences/party-lawn" element={<PartyLawn />} />
        <Route path="/experiences/conference" element={<Conference />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        {/* <Route path="/experiences/party-lawn" element={<PartyLawnPage />} />
<Route path="/experiences/banquets" element={<BanquetsPage />} />
<Route path="/experiences/conference" element={<ConferencePage />} /> */}
      </Routes>
    </>
  );
}
