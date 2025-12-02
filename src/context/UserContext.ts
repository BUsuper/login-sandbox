import { createContext } from "react";
import type { UserContextValues } from "../types/types";

export const UserContext = createContext<UserContextValues>({
  currentUser: null,
  setCurrentUser: () => {},
});
