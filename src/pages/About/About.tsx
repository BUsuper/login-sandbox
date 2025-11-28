import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { QuestionMark, Login, Home, Api } from "@mui/icons-material";

const pages = {
  Home: <Home />,
  Login: <Login />,
  API: <Api />,
  About: <QuestionMark />,
};

export default function About() {
  return (
    <>
      <Typography>About</Typography>
      <Container>
        <Paper>
          <Typography>Purpose</Typography>
        </Paper>
        <Paper>
          <Typography>Contents</Typography>
          <Typography>This website has the following pages:</Typography>
          {Object.entries(pages).map((page) => {
            return (
              <List>
                <ListItem>
                  <ListItemIcon>{page[1]}</ListItemIcon>
                  <ListItemText primary={page[0]} />
                </ListItem>
              </List>
            );
          })}
        </Paper>
      </Container>
    </>
  );
}
