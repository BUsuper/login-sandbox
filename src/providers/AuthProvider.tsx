import type { ReactNode } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import type { User } from "../types/types";
import { TokenContext } from "../context/TokenContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <UserContext value={{ currentUser, setCurrentUser }}>
      <TokenContext value={{ accessToken, setAccessToken }}>
        {children}
      </TokenContext>
    </UserContext>
  );
}
