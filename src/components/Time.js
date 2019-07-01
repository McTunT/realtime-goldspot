import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(
    ({ goldspot }) => {
      (async () => {
        try {
          const response = await fetch(
            `http://27.254.77.78/rest/public/rest/${goldspot}`
          );
          const json = await response.json();
          setTime(json.G965B.children);
        } catch (e) {
          console.error(e);
        }
      })();

      const Interval = setInterval(() => {}, 3000);
      return () => clearInterval(Interval);
    },
    [time]
  );

  return <div style={{ color: "#fff" }}>{time.time}</div>;
};

export default Time;
