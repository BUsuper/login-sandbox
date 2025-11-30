import { Header } from "../../components";

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
  const BASE_URL = "https://rickandmortyapi.com/api";
  const CHARACTER_IDS = [1, 2, 3, 4, 5, 10, 22].join(",");
  console.log(CHARACTER_IDS);
  return (
    <>
      <Header />
    </>
  );
}
