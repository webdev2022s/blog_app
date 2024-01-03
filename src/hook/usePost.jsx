import { useContext } from "react";
import { PostContext } from "../Context/PostContextProvider";

export default function usePost() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("Context Provider is Out of Range");
  return context;
}
