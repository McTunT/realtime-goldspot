import React from "react";
import "./App.css";
import { useFetchs } from "./components/goldsport";

function App() {
  const res = useFetchs(`http://27.254.77.78/rest/public/rest/goldspot`, {});
  if (!res.G965B) {
    return <div>Loading...</div>;
  }

  const bid = res.G965B.bid;
  const offer = res.G965B.offer;
  return (
    <div className="content">
      <h3>{bid}</h3>
      <h1>{offer}</h1>
    </div>
  );
}

export default App;
