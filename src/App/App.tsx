import "./App.css";
import { Route, Routes } from "react-router";
import { Home, About, Login, Logout, APITest } from "../pages/";
import { AuthProvider } from "../providers";
import { RequireAuth } from "../components";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/api"
          element={
            <RequireAuth>
              <APITest />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
