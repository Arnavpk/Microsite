import Navbar from '../components/Navbar';
import HeroVideo from '../components/HeroVideo';
import VenueDetails from '../components/VenueDetails';
import Packages from '../components/Packages';
import FeastSelection from '../components/FeastSelection';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';



export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo />
      <VenueDetails />
      <Packages />
      <FeastSelection />
      <Testimonials />
      <EnquiryForm />
      <Footer />
      {/* Remove this spacer once HeroVideo is wired in */}
      {/* <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0B1221 0%, #111827 100%)', color: '#333', fontSize: '13px', letterSpacing: '0.06em' }}>
        ↑ Navbar complete — next: HeroVideo section
      </div> */}
    </main>
  );
}