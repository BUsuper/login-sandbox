import axios from "axios";
import type { User } from "../types/types";

const LOGIN_URL = "https://dummyjson.com/auth/login";
const REFRESH_URL = "https://dummyjson.com/auth/refresh";
const CURRENT_USER_URL = "https://dummyjson.com/auth/me";

// Pass setters to it
export async function refresh(
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>,
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>,
  refreshToken?: string
) {
  try {
    // Send the refresh token manually
    // withCredentials won't work (sending a cookie isn't allowed by the browser - CORS issue)
    const res = await axios.post(
      REFRESH_URL,
      refreshToken ? { refreshToken } : {}, // body
      {
        withCredentials: false,
      }
    );
    setAccessToken(res.data.accessToken);
    sessionStorage.setItem("refreshToken", res.data.refreshToken);
    getCurrentAuthUser(setCurrentUser, res.data.accessToken);
  } catch (err) {
    console.log(err);
    setAccessToken(null);
    setCurrentUser(null);
  }
}

export async function getCurrentAuthUser(
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>,
  accessToken: string
) {
  try {
    const res = await axios.get(CURRENT_USER_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setCurrentUser({
      email: res.data.email,
      firstName: res.data.firstName,
      gender: res.data.gender,
      id: res.data.id,
      image: res.data.image,
      lastName: res.data.lastName,
      username: res.data.username,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function login(
  usernameInput: string,
  passwordInput: string,
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>,
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
) {
  try {
    const res = await axios.post(
      LOGIN_URL, // URL
      {
        username: usernameInput, //body
        password: passwordInput,
      },
      {
        headers: { "Content-Type": "application/json" }, // config
        /*withCredentials: true,  */ // This is not allowed with the current CORS that allows all sources
      }
    );

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
      // This is not great, but the CORS won't allow sending the HTTPOnly cookie
      sessionStorage.setItem("refreshToken", res.data.refreshToken);
    } else {
      setCurrentUser(null);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function logout() {
  // TODO: clear refresh and access tokens, user
}
