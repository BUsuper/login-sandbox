import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useAuth() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("User is not authenticated");
  }
  return user;
}
