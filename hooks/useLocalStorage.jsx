import { useEffect, useState } from "react";

const initialStorage = () => {
  const data = JSON.parse(localStorage.getItem("POST"));
  if (!data) return [];
  return data;
};

export default function useLocalStorage() {
  const [value, setValue] = useState(initialStorage);

  useEffect(() => {
    async function store() {
      localStorage.setItem("POST", JSON.stringify(value));
    }
    store();
  }, [value]);

  return [value, setValue];
}
