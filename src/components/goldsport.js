import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchs = url => {
  const [G965B, setG965B] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios(url);
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
  }, [G965B, url]);
  return { G965B, error };
};
