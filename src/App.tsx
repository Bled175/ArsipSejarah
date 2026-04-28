/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProvinceDetail from "./pages/ProvinceDetail";
import Figures from "./pages/Figures";
import FigureDetail from "./pages/FigureDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F0] font-serif text-[#141414]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/province/:name" element={<ProvinceDetail />} />
          <Route path="/tokoh" element={<Figures />} />
          <Route path="/tokoh/:id" element={<FigureDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

