import axios from "axios";
import type { User } from "../types/types";

const REFRESH_URL = "https://dummyjson.com/auth/refresh";

// Pass setters to it
export async function refresh(
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>,
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
) {
  try {
    const res = await axios.post(REFRESH_URL);
    setAccessToken(res.data.accessToken);
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
    console.log(err);
    setAccessToken(null);
    setCurrentUser(null);
  }
}

export async function login() {}

export async function logout() {}
