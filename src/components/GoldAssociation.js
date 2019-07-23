import React, { useState, useEffect } from "react";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import { Flex, Box } from "rebass";
import NumberFormat from "react-number-format";
import axios from "axios";
import moment from "moment";

import { ButtonLink } from "./ฺButton";
import { BoxSpot } from "./Box";

import "moment-timezone";
import "moment/locale/th";

moment.locale("th");

const GoldAssociation = () => {
  const [count, setCount] = useState("1");
  const [G965B, setG965B] = useState("");
  const [offer, setOffer] = useState("");
  const [jiwelryBid, setJiwelryBid] = useState("");
  const [jiwelryOffer, setJiwelryOffer] = useState("");
  const [interestOffer, setInterestOffer] = useState("");
  const [time, setTime] = useState("");
  const [timeDate, setTimeDate] = useState("");

  const countHandleChange = event => {
    setCount(event.target.value);
  };

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios("http://27.254.77.78/rest/public/rest/goldspot");
      setG965B(res.data.G965B.bid_asso);
      setOffer(res.data.G965B.offer_asso);
      setJiwelryBid(+G965B + 500);
      setJiwelryOffer((offer * 0.95).toFixed());
      setTime(res.data.G965B.time.slice(10, 16));
      setTimeDate(res.data.G965B.time.slice(0, 10));
      setInterestOffer(jiwelryOffer - 1000);
      console.log(`bid ${res.data.G965B.bid_asso}`);
      console.log(`offer ${res.data.G965B.offer_asso}`);
    };
    FetchData();
    const id = setInterval(() => {
      FetchData();
    }, 3000);
    return () => clearInterval(id);
  }, [G965B, jiwelryOffer, offer, timeDate]);

  const Bangkok = moment.tz(timeDate, "Asia/Bangkok");
  const TimeDate = Bangkok.format("D MMMM YYYY");

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
            เวลา&nbsp; {time} น
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
            <FormattedNumber value={G965B} />
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
            <FormattedNumber value={jiwelryBid} />
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mt={[30]}
            mr={[26]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={jiwelryOffer} />
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
            <FormattedNumber value={interestOffer} />
          </BoxSpot>
        </Flex>
      </Box>
    </div>
  );
};

export default GoldAssociation;
