import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSections from '../components/AboutSections';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <Navbar />
            <Hero />
            <AboutSections />
            <ProjectsSection />
            <ClientsSection />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default LandingPage;
