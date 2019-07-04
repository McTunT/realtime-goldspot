import React from "react";
import "./App.css";
import { useFetchs } from "./components/Goldsport";

import { FormattedNumber } from "react-intl";
import moment from "moment";
import { BoxSpot } from "./components/Box";
import { Flex, Box } from "rebass";

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

  const bid_jiwelry = bid => {
    let output = "";
    output = +bid + 500;
    return output;
  };

  const offer_jiwelry = offer * 0.95;
  const interest_offer = offer_jiwelry - 1000;

  return (
    <div className="content" style={{ color: "#FFF" }}>
      <Box mr={[140]} mt={[137]}>
        <Flex justifyContent="flex-end">
          <div
            style={{ fontSize: "47px", fontWeight: "bold", color: "#201F26" }}
          >
            {TimeDate}
          </div>
        </Flex>
        <Flex justifyContent="flex-end">
          <div
            style={{
              fontSize: "47px",
              fontWeight: "bold",
              color: "#201F26"
            }}
          >
            เวลา&nbsp;
            {TimesServer}
          </div>
        </Flex>
      </Box>
      <Box mr={[85]} mt={[75]}>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[82]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={bid} />
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[28]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={offer} />
          </BoxSpot>
        </Flex>

        <Flex alignItems="flex-end" justifyContent="flex-end">
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[82]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={bid_jiwelry(bid)} />
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mt={[30]}
            mr={[28]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={offer_jiwelry.toFixed()} />
          </BoxSpot>
        </Flex>

        <Flex alignItems="flex-end" justifyContent="flex-end">
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[85]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            2%
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mt={[40]}
            mr={[28]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={interest_offer.toFixed()} />
          </BoxSpot>
        </Flex>
      </Box>
    </div>
  );
};

export default App;
