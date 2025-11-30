import { Box, Button, TextField } from "@mui/material";
import { Header } from "../../components/";
import { useState, type ChangeEvent, type FormEvent } from "react";

export default function Login() {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  function handleUsernameInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setUsernameInput(e.target.value);
  }

  function handlePasswordInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setPasswordInput(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(`Login: ${usernameInput}\nPassword: ${passwordInput}`);
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
        <Button id="signupButton" variant="outlined" sx={{ width: 90 }}>
          Sign up
        </Button>
      </Box>
    </>
  );
}
