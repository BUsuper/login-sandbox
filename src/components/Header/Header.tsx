import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

export function Header() {
  const [value, setValue] = useState<number>(0);

  const routes = {
    home: "/",
    login: "/login",
    about: "/about",
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation bar"
          centered
        >
          {Object.entries(routes).map(([title, link]) => {
            return (
              <Tab
                sx={{ "&:focus": { outline: "none" } }}
                label={title.toUpperCase()}
                value={link}
                to={link}
                component={Link}
                key={title}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}
