import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useAuth() {
  const { currentUser: user } = useContext(UserContext);

  return user;
}
