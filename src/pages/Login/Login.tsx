import { Box, Button, TextField, Typography } from "@mui/material";
import { Header } from "../../components/";
import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import { UserContext } from "../../context/UserContext";
import { TokenContext } from "../../context/TokenContext";
import { login } from "../../utils/auth";
import { useNavigate } from "react-router";

export default function Login() {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [isLoginError, setIsLoginError] = useState<boolean>(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setAccessToken } = useContext(TokenContext);
  const navigate = useNavigate();

  console.log(`Current user: ${currentUser}`);

  function handleUsernameInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setUsernameInput(e.target.value);
  }

  function handlePasswordInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setPasswordInput(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    console.log(`Login: ${usernameInput}\nPassword: ${passwordInput}`);
    try {
      const success = await login(
        usernameInput,
        passwordInput,
        setAccessToken,
        setCurrentUser
      );
      if (success) {
        navigate("/");
      } else {
        setIsLoginError(true);
        setUsernameInput("");
        setPasswordInput("");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header></Header>
      <Box
        id="loginForm"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="usernameInput"
          required
          value={usernameInput}
          onChange={handleUsernameInputChange}
          label="Username"
          sx={{ my: 2 }}
        ></TextField>
        <TextField
          id="passwordInput"
          required
          value={passwordInput}
          onChange={handlePasswordInputChange}
          label="Password"
          type="password"
        ></TextField>
        <Button
          id="loginSubmitButton"
          variant="outlined"
          type="submit"
          sx={{ my: 2, width: 90 }}
        >
          Login
        </Button>
        <Button
          id="signupButton"
          variant="outlined"
          disabled
          sx={{ width: 90 }}
        >
          Sign up
        </Button>
        {isLoginError && (
          <Typography variant="body1" color="red">
            Wrong password or username
          </Typography>
        )}
      </Box>
    </>
  );
}
