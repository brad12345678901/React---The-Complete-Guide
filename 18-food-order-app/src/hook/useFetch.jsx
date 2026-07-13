import { useEffect, useState } from "react";

export function useFetch(fetchfn, initialValue) {
  const [data, setData] = useState(initialValue);
  const [errors, setErrors] = useState();
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setFetching(true);
        const fetchData = await fetchfn();
        setData(fetchData);
      } catch (err) {
        setErrors({message: err.message || "Failed to fetch data"});
      }
      setFetching(false);
    }
    getData();
  }, [fetchfn]);
  
  return {
    data,
    setData,
    isFetching
  };
}
