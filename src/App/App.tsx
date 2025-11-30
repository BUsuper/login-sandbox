import "./App.css";
import { Route, Routes } from "react-router";
import { Home, About, Login, APITest } from "../pages/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/api" element={<APITest />} />
    </Routes>
  );
}

export default App;
