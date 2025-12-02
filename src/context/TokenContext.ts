import { createContext } from "react";
import type { TokenContextValues } from "../types/types";

export const TokenContext = createContext<TokenContextValues>({
  accessToken: null,
  setAccessToken: () => {},
});
