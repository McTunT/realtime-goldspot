import React from "react";
import "./App.css";
import { useFetchs } from "./components/Goldsport";
import { FormattedNumber } from "react-intl";

const App = () => {
  const res = useFetchs(`http://27.254.77.78/rest/public/rest/goldspot`, {});
  if (!res.G965B) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }
  const Times = res.G965B.time;
  const TimesServer = Times.slice(10, 16);
  const bid = res.G965B.bid;
  const offer = res.G965B.offer;

  const arrow = bid => {
    let t = bid + 500;
    return t;
  };

  const bid_jiwelry = bid + 500;
  const offer_jiwelry = offer * 0.95;
  const interest = (bid_jiwelry * 2) / 100;
  const interest_offer = offer_jiwelry - 1000;

  return (
    <div className="content" style={{ color: "#fff", fontSize: "50px" }}>
      <div>{TimesServer}</div>
      <FormattedNumber value={bid} />
      <div>
        <FormattedNumber value={offer} />
      </div>
      <div>
        <FormattedNumber value={bid_jiwelry} />
      </div>
      <div>
        <FormattedNumber value={arrow(bid)} />
      </div>
      <div>
        <FormattedNumber value={interest.toFixed()} />
      </div>
      <div>
        <FormattedNumber value={interest_offer.toFixed()} />
      </div>
    </div>
  );
};

export default App;
