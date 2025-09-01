// Shadcn components

// import './index.css'

// Components
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

// Pages

const App = () => {

    return (
        <div className="min-h-screen bg-dark-100">
            <Navigation />
            <main>
                {/* Others Section */}
                <Banner />
                <AboutMe />
                <Projects />
            </main>

            {/* Footer Section */}
        </div>
    )
}

export default App;
