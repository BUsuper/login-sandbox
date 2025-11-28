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

const pagesIcons = {
  Home: <Home />,
  Login: <Login />,
  API: <Api />,
  About: <QuestionMark />,
};

const listOfGoals = [
  "Creating a log-in page and loggin users in",
  "Routing",
  "Creating protected routes",
  "Using axios to fetch data",
];

export default function About() {
  return (
    <>
      <Typography>About</Typography>
      <Container>
        <Paper>
          <Typography>Purpose</Typography>
          <Typography>It's just a sandbox to learn stuff about:</Typography>
          <List>
            {listOfGoals.map((goal) => {
              return (
                <ListItem key={goal}>
                  <ListItemIcon>⭐</ListItemIcon>
                  <ListItemText primary={goal} />
                </ListItem>
              );
            })}
          </List>
        </Paper>
        <Paper>
          <Typography>Contents</Typography>
          <Typography>This website has the following pages:</Typography>
          <List>
            {Object.entries(pagesIcons).map((page) => {
              return (
                <ListItem key={page[0]}>
                  <ListItemIcon>{page[1]}</ListItemIcon>
                  <ListItemText primary={page[0]} />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Container>
    </>
  );
}
