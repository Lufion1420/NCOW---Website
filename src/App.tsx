import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Heroes from "./pages/heroes";
import Gameplay from "./pages/gameplay";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="gameplay" element={<Gameplay />} />
      </Route>
    </Routes>
  );
}

export default App;
