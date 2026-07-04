import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DigispherHeader from "./components/DigispherHeader/DigisphereHeader";
import DigisphereHome from "./pages/DigisphereHome/DigispherHome";
import DigisphereAbout from "./pages/DigisphereAbout/DigisphereAbout";
import DigisphereFooter from "./components/DigisphereFooter/DigisphereFooter";
import { WebsiteDevelopment } from "./pages/DigisphereServices/WebsiteDevelopment/WebsiteDevelopment";
import { DigitalMarketing } from "./pages/DigisphereServices/DigitalMarketing/DigitalMarketing";
import ManagedItServices from "./pages/DigisphereServices/MangedItServices/ManagedItServices";
import ExperienceDesign from "./pages/DigisphereServices/ExperienceDesign/ExperienceDesign.js";
import Devops from "./pages/DigisphereServices/Devops/Devops.js";
import CyberSecurity from "./pages/DigisphereServices/CyberSecurity/CyberSecurity.js";
import Automation from "./pages/DigisphereServices/AutomationSolutions/Automation.js";
import AIPowered from "./pages/DigisphereServices/AIPoweredSolutions/AIPowered.js"
import CloudServices from "./pages/DigisphereServices/CloudServices/CloudServices.js"
const App = () => {
  return (
    <Router>
      <DigispherHeader />
      <Routes>
        <Route path="/" element={<DigisphereHome />} />
        <Route path="/about" element={<DigisphereAbout />} />
        <Route
          path="/services/webdevelopment"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/managed-it-services"
          element={<ManagedItServices />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/experience-design"
          element={<ExperienceDesign />}
        />
        <Route path="/services/devops" element={<Devops />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/aipowered" element={<AIPowered/>} />
        <Route path="/services/cloudservices" element={<CloudServices/>} />
      </Routes>

      <DigisphereFooter />
    </Router>
  );
};

export default App;
