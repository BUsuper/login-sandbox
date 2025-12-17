/// <reference types="vite-plugin-svgr/client" />
// This is necessary for the vite svgr plugin to work with TS

import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { Header } from "../../components";
import { logout } from "../../utils/auth";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import Warning from "../../assets/warning.svg?react";

export function Logout() {
  const theme = useTheme();
  const { setAccessToken } = useContext(TokenContext);
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    logout(setAccessToken, setCurrentUser);
    navigate("/");
  }

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={4}
      >
        <SvgIcon
          sx={{
            fontSize: 150,
            fill: theme.palette.background.default,
            stroke: theme.palette.primary.light,
            strokeWidth: 2,
          }}
          component={Warning}
        />
        <Typography variant="h4" my={4}>
          Are you sure you want to logout?
        </Typography>
        <Button
          onClick={handleClick}
          variant="outlined"
          sx={{ my: 2, width: 90 }}
        >
          Logout
        </Button>
      </Box>
    </>
  );
}
