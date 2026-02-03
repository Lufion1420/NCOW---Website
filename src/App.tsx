import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

import Gameplay from "./pages/gameplay";
import Heroes from "./pages/heroes";
import Items from "./pages/items";
import Terrain from "./pages/terrain";
import Forum from "./pages/forum";
import Roadmap from "./pages/roadmap";
import Guide from "./pages/guides";
import About from "./pages/about";
import Join from "./pages/join";
import Support from "./pages/support";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="gameplay" element={<Gameplay />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="items" element={<Items />} />
        <Route path="terrain" element={<Terrain />} />
        <Route path="forum" element={<Forum />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="guides" element={<Guide />} />
        <Route path="join" element={<Join />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
