import FloatingActions from "../components/FloatingActions.jsx";
import InnerPageHeader from "../components/InnerPageHeader.jsx";
import Footer from "../components/Footer.jsx";
import EnquiryForm from "../pages/EnquiriForm.jsx";

export default function EnquiryPage() {
  return (
    <>
      <FloatingActions />
      <InnerPageHeader dark />

      <main className="innerPage enquiryPage pageTopSpacing">
        <div className="container">
          <div className="enquiryPageIntro reveal">
            
            <h1>Plan Your Experience</h1>
            <p>
              Share your stay, celebration, dining, or event requirements with us.
              Our team will respond with suitable availability, options, and details.
            </p>
          </div>

          <div className="enquiryPageFormWrap reveal">
            <EnquiryForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}