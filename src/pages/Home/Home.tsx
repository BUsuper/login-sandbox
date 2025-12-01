import { Typography, Link } from "@mui/material";
import { Header } from "../../components/";
import { Link as RouterLink } from "react-router";

export default function Home() {
  const currentUser = null;

  return (
    <>
      <Header></Header>
      <Typography my={4} variant="h2">
        Wellcome{currentUser ? `, ${currentUser}!` : "!"}
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
