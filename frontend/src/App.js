import "./App.css";
import CompShow from "./components/Show";
import CompCreate from "./components/Create";
import CompUpdate from "./components/Update";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CompShow />} />
        <Route path="/create" element={<CompCreate />} />
        <Route path="/update/:id" element={<CompUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
