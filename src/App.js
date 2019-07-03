import React from "react";
import "./App.css";
import { useFetchs } from "./components/Goldsport";

import { FormattedNumber } from "react-intl";
import moment from "moment";
import { BoxSpot } from "./components/Box";
import { Flex, Text } from "rebass";

import "moment-timezone";
import "moment/locale/th";

moment.locale("th");

const App = () => {
  const res = useFetchs(`http://27.254.77.78/rest/public/rest/goldspot`, {});

  if (!res.G965B) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  const Times = res.G965B.time;
  const TimesServer = Times.slice(10, 19);

  const DateTime = Times.slice(0, 10);
  const Bangkok = moment.tz(DateTime, "Asia/Bangkok");
  const TimeDate = Bangkok.format("D MMMM YYYY");

  const bid = res.G965B.bid_asso;
  const offer = res.G965B.offer_asso;

  let bid500 = 500;
  let bid_jiwelry = bid + bid500;
  const offer_jiwelry = offer * 0.95;

  const interest = (bid_jiwelry * 2) / 100;
  const interest_offer = offer_jiwelry - 1000;

  return (
    <div className="content" style={{ color: "#FFF" }}>
      <Text fontSize={[4, 5, 6]} fontWeight="bold" color="white">
        ราคาทองคำ
      </Text>
      <Text fontSize={[3, 4, 5]} fontWeight="bold" color="black">
        ประจำวันที่&nbsp; {TimeDate}
      </Text>
      <Text fontSize={[3, 4, 5]} fontWeight="bold" color="black">
        ราคาเปลี่ยนแปลง &nbsp;&nbsp;เวลา&nbsp;
        {TimesServer}
      </Text>
      <Flex alignItems="flex-end" justifyContent="flex-end">
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          m={[1, 2, 3, 4]}
          color="gold"
          bg="white"
          fontSize={[70, 80, 90, 100]}
        >
          <FormattedNumber value={bid} />
        </BoxSpot>
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          m={[1, 2, 3, 4]}
          color="gold"
          bg="white"
          fontSize={[70, 80, 90, 100]}
        >
          <FormattedNumber value={offer} />
        </BoxSpot>
      </Flex>
      <Flex alignItems="flex-end" justifyContent="flex-end">
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          m={[1, 2, 3, 4]}
          color="gold"
          bg="white"
          fontSize={[70, 80, 90, 100]}
        >
          <FormattedNumber value={bid_jiwelry} />
        </BoxSpot>
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          m={[1, 2, 3, 4]}
          color="gold"
          bg="white"
          fontSize={[70, 80, 90, 100]}
        >
          <FormattedNumber value={offer_jiwelry.toFixed()} />
        </BoxSpot>
      </Flex>
      <Flex alignItems="flex-end" justifyContent="flex-end">
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          m={[1, 2, 3, 4]}
          color="gold"
          bg="white"
          fontSize={[70, 80, 90, 100]}
        >
          <FormattedNumber value={interest.toFixed()} />
        </BoxSpot>
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          m={[1, 2, 3, 4]}
          color="gold"
          bg="white"
          fontSize={[70, 80, 90, 100]}
        >
          <FormattedNumber value={interest_offer.toFixed()} />
        </BoxSpot>
      </Flex>
    </div>
  );
};

export default App;
