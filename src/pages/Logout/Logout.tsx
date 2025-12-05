import { Button } from "@mui/material";
import { Header } from "../../components";
import { logout } from "../../utils/auth";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

export function Logout() {
  const { setAccessToken } = useContext(TokenContext);
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    logout(setAccessToken, setCurrentUser);
    navigate("/");
  }

  return (
    <>
      <Header />
      <Button onClick={handleClick}>Logout</Button>
    </>
  );
}
