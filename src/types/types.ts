export type User = {
  email: string;
  firstName: string;
  gender: "female" | "male";
  id: number;
  image: string;
  lastName: string;
  username: string;
};

export type UserContextValues = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type TokenContextValues = {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
};
