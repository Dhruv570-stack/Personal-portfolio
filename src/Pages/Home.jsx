import SkillsSection from "../components/SkillsSection";
import Aboutme from "../components/Aboutme";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackground/>
            <Navbar/>
            <main>
            <HeroSection/>
            <Aboutme/>
            <SkillsSection/>
            <Contacts/>
            </main>
            <Footer/>

        </div>
    )
}




export default Home;