export type User = {
  email: string;
  firstName: string;
  gender: "female" | "male";
  id: number;
  image: string;
  lastName: string;
  username: string;
};

export type Character = {
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

export type UserContextValues = {
  currentUser: User | null | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};

export type TokenContextValues = {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
};
