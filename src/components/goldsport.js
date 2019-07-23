import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchs = () => {
  const [G965B, setG965B] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios("http://27.254.77.78/rest/public/rest/goldspot");
      setG965B(res.data.G965B.bid);
      console.log(`data ${res.data.G965B.bid}`);
    };
    FetchData();
    const id = setInterval(() => {
      setG965B();
    }, 3000);
    return () => clearInterval(id);
  }, [G965B]);
  return { G965B };
};
