import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Heroes from "./pages/heroes";
import Gameplay from "./pages/gameplay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/characters" element={<Heroes />}></Route>
      <Route path="/gameplay" element={<Gameplay />}></Route>
    </Routes>
  );
}

export default App;
