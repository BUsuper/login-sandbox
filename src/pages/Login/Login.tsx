import { Box, Button, TextField } from "@mui/material";
import { Header } from "../../components/";
import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { TokenContext } from "../../context/TokenContext";

export default function Login() {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setAccessToken } = useContext(TokenContext);

  console.log(`Current user: ${currentUser}`);

  const DUMMY_API_URL = "https://dummyjson.com/auth/login";

  function handleUsernameInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setUsernameInput(e.target.value);
  }

  function handlePasswordInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setPasswordInput(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(`Login: ${usernameInput}\nPassword: ${passwordInput}`);
    axios
      .post(
        DUMMY_API_URL, // URL
        {
          username: usernameInput, //body
          password: passwordInput,
        },
        {
          headers: { "Content-Type": "application/json" }, // config
          /*withCredentials: true,  */ // This is not allowed with the current CORS that allows all sources
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setCurrentUser({
            email: res.data.email,
            firstName: res.data.firstName,
            gender: res.data.gender,
            id: res.data.id,
            image: res.data.image,
            lastName: res.data.lastName,
            username: res.data.username,
          });
          setAccessToken(res.data.accessToken);
        } else {
          setCurrentUser(null);
        }
      })
      .catch(console.error);
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
      </Box>
    </>
  );
}
