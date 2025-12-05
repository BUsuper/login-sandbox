import { Typography, Box, Link, Skeleton } from "@mui/material";
import { Header } from "../../components/";
import { Link as RouterLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return currentUser === undefined ? (
    <>
      <Header />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={4}
        mt={4}
      >
        <Skeleton width={430} height={70}></Skeleton>
        <Skeleton width={270} height={28}></Skeleton>
      </Box>
    </>
  ) : (
    <>
      <Header />
      <Typography my={4} variant="h2">
        Wellcome{currentUser !== null ? `, ${currentUser.firstName}!` : "!"}
      </Typography>
      {currentUser ? (
        <Link component={RouterLink} to="/api" underline="hover" variant="h5">
          Check out the characters
        </Link>
      ) : (
        <Link component={RouterLink} to="/login" underline="hover" variant="h5">
          Log in
        </Link>
      )}
    </>
  );
}
