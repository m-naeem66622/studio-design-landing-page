import "./App.css";
import TopMenu from "./components/TopMenu";
import HeroHeadline from "./components/HeroHeadline";
import OurClient from "./components/OurClient";
import GreatSince from "./components/GreatSince";
import HowCanWeHelp from "./components/HowCanWeHelp";
import NewsLetter from "./components/NewsLetter";

function App() {
    return (
        <div className="mb-40 max-w-[1440px] mx-auto">
            <TopMenu />
            <HeroHeadline />
            <OurClient />
            <HowCanWeHelp />
            <GreatSince />
            <NewsLetter />
        </div>
    );
}

export default App;
