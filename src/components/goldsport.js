import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Spot_API } from "./Constants";
import { labeledStatement } from "@babel/types";

export const Spot = () => {
  const [G965b, setG965b] = useState("");
  const [value, setvalue] = useState("");

  useEffect(() => {
    const Token = axios.CancelToken;
    const source = Token.source();

    const loaddata = () => {
      try {
        axios.get(Spot_API, { cancelToken: source.token }).then(data => {
          setG965b(data.data.G965B.bid);
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loaddata();
    const id = setInterval(() => {
      loaddata();
    }, 3000);

    return () => {
      source.cancel();
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>{G965b}</h1>
    </div>
  );
};
