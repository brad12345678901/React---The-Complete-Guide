import { useEffect } from "react";

function useFetch() {
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (err) {
        setError({ message: err.message || "Failed to fetch user places" });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);
}
