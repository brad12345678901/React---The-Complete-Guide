import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/placessssssss");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        setAvailablePlaces(resData.places);
      } catch (err) {
        setError({
          message:
            err.message || "Could not fetch places, please try again later",
        });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message}></Error>;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
