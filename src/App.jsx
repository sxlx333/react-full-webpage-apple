import { DarkTopSection } from "./components/darkTopSection";
import { NavigationSection } from "./components/navigationSection";
import { PlugSection } from "./components/PlugSection";
import { VisionSection } from "./components/VisionSection";
import { DesignSection } from "./components/DesignSection";
import { InnovationSection } from "./components/InnovationSection";
import { AluminiumSection } from "./components/AluminiumSection";
import './css/fonts.css';

function App() {
  return (
    <>
      <DarkTopSection />
      <NavigationSection />
      <PlugSection />
      <VisionSection />
      <DesignSection />
      <InnovationSection />
      <AluminiumSection />
    </>
  )
}

export default App;
