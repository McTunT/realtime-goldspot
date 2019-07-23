import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchs = url => {
  const [G965B, setG965B] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios(url);
      setG965B(res.data.G965B);
      console.log(`data ${res.data.G965B.bid}`);
    };
    FetchData();
    const id = setInterval(() => {
      setG965B(G965B => G965B);
    }, 3000);
    return () => clearInterval(id);
  }, [G965B, url]);
  return { G965B, url };
};
