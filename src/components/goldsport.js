import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchs = (url, options) => {
  const [G965B, setG965B] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios(url, options);
        setG965B(res.data.G965B);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
    const id = setInterval(() => {
      setG965B(G965B);
    }, 3000);
    return () => clearInterval(id);
  }, [G965B, options, url]);
  return { G965B, error };
};
