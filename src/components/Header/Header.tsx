import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
  const loc = useLocation().pathname;
  const [currentTab, setCurrentTab] = useState<string>(loc);

  const routes = [
    { title: "home", path: "/" },
    { title: "login", path: "/login" },
    { title: "about", path: "/about" },
  ];

  /* handleChange for MUI Tabs is called with two arguments: event and new tab value
 The _ indicates that event is intentionally left unused */
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="navigation bar"
          centered
        >
          {routes.map(({ title, path }) => {
            return (
              <Tab
                sx={{ "&:focus": { outline: "none" } }}
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
    </Box>
  );
}
