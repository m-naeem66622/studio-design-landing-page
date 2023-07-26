import "./App.css";
import TopMenu from "./components/TopMenu";
import HeroHeadline from "./components/HeroHeadline";
import OurClient from "./components/OurClient";
import GreatSince from "./components/GreatSince";
import HowCanWeHelp from "./components/HowCanWeHelp";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import HappyClient from "./components/HappyClient";

function App() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <TopMenu />
            <HeroHeadline />
            <OurClient />
            <HowCanWeHelp />
            <GreatSince />
            <HappyClient />
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default App;
