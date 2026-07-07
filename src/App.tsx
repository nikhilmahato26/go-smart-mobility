import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Sections
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import CabFleet from './sections/CabFleet';
import GaragePride from './sections/GaragePride';
import Services from './sections/Services';
import PanIndiaServices from './sections/PanIndiaServices';
import IncredibleIndia from './sections/IncredibleIndia';
import RoyalRajasthan from './sections/RoyalRajasthan';
import CareSection from './sections/CareSection';
import RideQuality from './sections/RideQuality';
import TeamStructure from './sections/TeamStructure';
import OfficeGallery from './sections/OfficeGallery';
import Strengths from './sections/Strengths';
import VisionMission from './sections/VisionMission';
import Contacts from './sections/Contacts';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <CabFleet />
        <GaragePride />
        <Services />
        <PanIndiaServices />
        <IncredibleIndia />
        <RoyalRajasthan />
        <CareSection />
        <RideQuality />
        <TeamStructure />
        <OfficeGallery />
        <Strengths />
        <VisionMission />
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
