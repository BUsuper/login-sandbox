import axios from "axios";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

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
    origin: object; // Placeholder for CharacterLocation interface
    location: object; // Placeholder for CharacterLocation interface
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
      const res = await axios({
        baseURL,
        url,
        method: "GET",
      });

      /* console.log(res.data); */
      return res.data;
    } catch (err) {
      console.error(`The request has failed with the error: ${err}`);
      throw err;
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCharacterData(BASE_URL, CHARACTER_IDS_URL);
        setCharactersData(data);
      } catch (err) {
        console.error(`Could not fetch the data: ${err}`);
        throw err;
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Grid container spacing={4}>
        {characterData && <p>Yay, there is some data</p>}
      </Grid>
    </>
  );
}
