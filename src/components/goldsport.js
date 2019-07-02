import { useState, useEffect } from "react";
//import { FormattedNumber } from "react-intl";
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
  }, [options, url]);
  return { G965B, error };
};
