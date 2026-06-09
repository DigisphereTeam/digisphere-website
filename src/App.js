import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DigispherHeader from "./pages/DigispherHeader/DigisphereHeader";
import DigisphereHome from "./pages/DigisphereHome/DigispherHome";
import DigisphereAbout from "./pages/DigisphereAbout/DigisphereAbout";
import DigisphereFooter from "./pages/DigisphereFooter/DigisphereFooter";

const App = () => {
  return (
    <Router>
      <DigispherHeader />
      <Routes>
        <Route path="/" element={<DigisphereHome />} />
        <Route path="/about" element={<DigisphereAbout />} />
      </Routes>

      <DigisphereFooter />
    </Router>
  );
}

export default App;