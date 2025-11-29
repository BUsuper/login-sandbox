import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { QuestionMark, Login, Home, Api } from "@mui/icons-material";
import { Header } from "../../components/";

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
      <Header />
      <Grid container spacing={4} paddingTop={8}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Paper elevation={4} sx={{ paddingY: 4 }}>
            <Typography variant="h4">Purpose</Typography>
            <Typography variant="body1">
              It's just a sandbox to learn stuff about:
            </Typography>
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
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Paper elevation={4} sx={{ paddingY: 4 }}>
            <Typography variant="h4">Contents</Typography>
            <Typography variant="body1">
              This website has the following pages:
            </Typography>
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
        </Grid>
      </Grid>
    </>
  );
}
