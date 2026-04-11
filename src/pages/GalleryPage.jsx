import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";
export default function GalleryPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <div className="innerPage">
        <div className="container">
          <h1>Gallery</h1>
          <p>
            Discover the spaces, beauty, and atmosphere of Urtth through our visual journey.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}