import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spot_API } from "./Constants";

export const Spot = () => {
  const [G965b, setG965b] = useState("");
  const [isloding, setIsLoading] = useState(false);

  useEffect(() => {
    const loaddata = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(Spot_API);
        setG965b(result.data.G965B.bid_asso);
      } catch (error) {
        console.log("Error", error);
      }
      setIsLoading(false);
    };
    loaddata();
    const id = setInterval(() => {
      loaddata();
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <React.Fragment>
      {isloding ? (
        <div>Loading Data Hook...</div>
      ) : (
        <div>
          <h1>{G965b}</h1>
          <h2>{G965b}</h2>
        </div>
      )}
    </React.Fragment>
  );
};
