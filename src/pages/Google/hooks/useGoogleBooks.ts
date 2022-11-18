import React from "react";
import { useGetData } from "../../../hooks";

export function useGoogleBooks() {
  const { getData, books } = useGetData();

  React.useEffect(() => {
    getData("xd", "google");
  }, []);

  return { books };
}
