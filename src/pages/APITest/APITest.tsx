import axios from "axios";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import {
  Grid,
  Skeleton,
  Card,
  Typography,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function APITest() {
  type Character = {
    id: number;
    name: string;
    url: string;
    created: string;
    status: "Dead" | "Alive" | "unknown";
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless" | "unknown";
    origin: { name: string; url: string }; // Placeholder for CharacterLocation interface
    location: { name: string; url: string }; // Placeholder for CharacterLocation interface
    image: string;
    episode: string[];
  };

  const [characterData, setCharactersData] = useState<Character[] | null>(null);
  const BASE_URL = "https://rickandmortyapi.com/api";
  const CHARACTER_IDS_URL = `/character/${[1, 2, 3, 4, 5, 10, 22].join(",")}`;

  async function fetchCharacterData(
    baseURL: string,
    url: string
  ): Promise<Character[]> {
    try {
      const res = await axios.get<Character[]>(url, { baseURL });
      return res.data;
    } catch (err) {
      console.error(`The request has failed with the error: ${err}`);
      throw err;
    }
  }

  useEffect(() => {
    // This will be used to abort the request when the component (page) unmounts
    const ctrl = new AbortController();

    (async () => {
      try {
        const data = await fetchCharacterData(BASE_URL, CHARACTER_IDS_URL);
        setCharactersData(data);
      } catch (err) {
        console.error(`Could not fetch the data: ${err}`);
        throw err;
      }
    })();

    // Abort the request when unmounted
    return () => ctrl.abort();
  }, []);

  return (
    <>
      <Header />
      {characterData ? (
        <Grid container spacing={4}>
          {characterData.map((character) => {
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={character.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={character.image}
                    alt={character.name}
                    sx={{ height: 120, objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography>{`#${character.id}`}</Typography>
                    <Typography>{character.name}</Typography>
                    <Typography>{`Status: ${character.status}`}</Typography>
                    <Typography>{`Species: ${character.species}`}</Typography>
                    <Typography>{`Gender: ${character.gender}`}</Typography>
                    <Typography>{`Place of origin: ${character.origin.name}`}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Skeleton></Skeleton>
      )}
    </>
  );
}
