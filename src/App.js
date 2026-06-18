import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DigispherHeader from "./components/DigispherHeader/DigisphereHeader";
import DigisphereHome from "./pages/DigisphereHome/DigispherHome";
import DigisphereAbout from "./pages/DigisphereAbout/DigisphereAbout";
import DigisphereFooter from "./components/DigisphereFooter/DigisphereFooter";
import { WebsiteDevelopment } from "./pages/DigisphereServices/WebsiteDevelopment/WebsiteDevelopment";
import ExperinceDesign from "./pages/DigisphereServices/ExperinceDesign/ExperinceDesign";

const App = () => {
  return (
    <Router>
      <DigispherHeader />
      <Routes>
        <Route path="/" element={<DigisphereHome />} />
        <Route path="/about" element={<DigisphereAbout />} />
        <Route path="/services/webdevelopment" element={<WebsiteDevelopment/>} />
        <Route path="/services/experience-design" element={<ExperinceDesign/>} />
      </Routes>

      <DigisphereFooter />
    </Router>
  );
}

export default App;