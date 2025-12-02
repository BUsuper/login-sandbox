import "./App.css";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { Home, About, Login, APITest } from "../pages/";
import { UserContext } from "../context/UserContext";
import type { User } from "../types/types";
import { TokenContext } from "../context/TokenContext";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  return (
    <UserContext value={{ currentUser, setCurrentUser }}>
      <TokenContext value={{ accessToken, setAccessToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api" element={<APITest />} />
        </Routes>
      </TokenContext>
    </UserContext>
  );
}

export default App;
