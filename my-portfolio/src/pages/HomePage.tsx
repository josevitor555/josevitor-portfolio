// Shadcn components

// import './index.css'

// Components
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Pages

interface HomePageProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ isPlaying, setIsPlaying }) => {

    return (
        <div className="min-h-screen bg-dark-100">
            <Navigation />
            <main>
                {/* Others Section */}
                <Banner isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                <AboutMe />
                <Projects />
                <Articles />
                <Experience />
                <Contact />
                <Footer />
            </main>

            {/* Footer Section */}
        </div>
    )
}

export default HomePage;
