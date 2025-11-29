import "./App.css";
import { Route, Routes } from "react-router";
import { Home, About, Login } from "../pages/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
