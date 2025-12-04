import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks";
import { useEffect } from "react";
import type { ReactNode } from "react";

export function RequireAuth({ children }: { children: ReactNode }) {
  const user = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: location, replace: true });
    }
  }, [user, location, navigate]);

  if (!user) return null;

  return children;
}
