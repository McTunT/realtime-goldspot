import React, { useState, useEffect } from "react";
import axios from "axios";
//mport moment from "moment";

const useFetchTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://27.254.77.78/rest/public/rest/goldspot`
        );
        setTime(res.data.G965B);
      } catch (error) {
        console.error(error);
      }
    })();
    setTimeout(() => {
      console.log(time);
    }, 3000);
  }, [time]);
  const Times = time.time;
  return <div>{Times.toLocaleTimeStrig("th")}</div>;
};

export default useFetchTime;
