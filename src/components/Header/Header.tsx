import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "../../hooks";
import { useTheme } from "@mui/material/styles";

export function Header() {
  type Routes = {
    title: string;
    path: string;
  }[];

  const theme = useTheme();
  const loc = useLocation().pathname;
  const [currentTab, setCurrentTab] = useState<string>(loc);
  const isUserLoggedIn = !!useAuth();

  const routes: Routes = [
    { title: "home", path: "/" },
    { title: "login", path: "/login" },
    { title: "logout", path: "/logout" },
    { title: "about", path: "/about" },
    { title: "api", path: "/api" },
  ];

  /* handleChange for MUI Tabs is called with two arguments: event and new tab value
 The _ indicates that event is intentionally left unused */
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      id="header"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="navigation bar"
        centered
      >
        {routes.map(({ title, path }) => {
          const isHidden =
            (isUserLoggedIn && path === "/login") ||
            (!isUserLoggedIn && path === "/logout");

          return (
            <Tab
              sx={{
                "&:focus": { outline: "none" },
                width: isHidden ? 0 : undefined,
                minWidth: isHidden ? 0 : undefined,
                padding: isHidden ? 0 : undefined,
                overflow: "hidden",
                opacity: isHidden ? 0 : 1,
              }}
              tabIndex={isHidden ? -1 : 0}
              aria-hidden={isHidden}
              label={title.toUpperCase()}
              value={path}
              to={path}
              component={Link}
              key={path}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
