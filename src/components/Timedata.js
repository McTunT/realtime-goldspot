import { useEffect } from "react";

export const useIntervals = (cb, interval = 3000) => {
  useEffect(() => {
    let id = setInterval(() => {
      cb();
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, [cb, interval]);
};
