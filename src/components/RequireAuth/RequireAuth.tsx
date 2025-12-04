import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks";
import type { ReactNode } from "react";

export function RequireAuth({ children }: { children: ReactNode }) {
  const user = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login", { state: location, replace: true });
  }

  return children;
}
