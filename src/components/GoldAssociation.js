import React, { useState } from "react";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import { Flex, Box } from "rebass";

import NumberFormat from "react-number-format";
import moment from "moment";

import { useFetchs } from "./Goldsport";
import { ButtonLink } from "./ฺButton";
import { BoxSpot } from "./Box";

import "moment-timezone";
import "moment/locale/th";

moment.locale("th");

const GoldAssociation = () => {
  const [count, setCount] = useState("1");

  const res = useFetchs("http://27.254.77.78/rest/public/rest/goldspot");

  if (!res.G965B) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  const countHandleChange = event => {
    setCount(event.target.value);
  };

  const Times = res.G965B.time;
  const TimesServer = Times.slice(10, 16);

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
    <div style={{ color: "#FFF" }}>
      <Link to="/">
        <Tooltip
          size="big"
          theme="light"
          html={<strong>ราคาทองสมาคมค้าทองคำกรอกเอง</strong>}
        >
          <ButtonLink />
        </Tooltip>
      </Link>

      <Box mr={[140]} mt={[91]}>
        <Flex justifyContent="flex-end">
          <div style={{ fontSize: "45px", fontWeight: "500" }}>{TimeDate}</div>
        </Flex>
        <Flex justifyContent="flex-end">
          <NumberFormat
            className="inputCount"
            value={count}
            onChange={countHandleChange}
          />
          <div
            style={{
              fontSize: "45px",
              fontWeight: "500"
            }}
          >
            เวลา&nbsp;
            {TimesServer} น.
          </div>
        </Flex>
      </Box>
      <Box mr={[85]} mt={[79]}>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[78]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={bid} />
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[26]}
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
            mr={[78]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={bid_jiwelry(bid)} />
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mt={[30]}
            mr={[26]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={offer_jiwelry.toFixed()} />
          </BoxSpot>
        </Flex>

        <Flex alignItems="flex-end" justifyContent="flex-end">
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mr={[78]}
            mt={[1, 2]}
            color="#cea931"
            fontSize={[90]}
          >
            2%
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mt={[40]}
            mr={[26]}
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

export default GoldAssociation;
