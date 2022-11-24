import React from "react";
import { useGetData } from "../../../hooks";

export function useGoogleBooks() {
  const { getData, books, loading } = useGetData();
  const [search, setSearch] = React.useState("a");

  React.useEffect(() => {
    getData(search, "google");
  }, [search]);

  return { books, setSearch, loading };
}
