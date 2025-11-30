import axios from "axios";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import { Grid, Skeleton } from "@mui/material";

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
    </>
  );
}
