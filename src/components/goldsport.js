import React, { useState, useEffect } from "react";
//import { FormattedNumber } from "react-intl";

export const useFetchs = (url, options) => {
  const [G965B, setG965B] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setG965B(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, [options, url]);
  return { G965B, error };
};
