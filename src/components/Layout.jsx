import Header from "./Header.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
