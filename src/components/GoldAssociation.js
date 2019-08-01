import React, { useState, useEffect, useRef } from "react";
import { FormattedNumber } from "react-intl";
import { Flex, Box } from "rebass";
import NumberFormat from "react-number-format";
import axios from "axios";
import moment from "moment";
import { RouteLink } from "./RouteLink";
import { Spot_API } from "./Constants";
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
  const [isError, setIsError] = useState(false);

  const countHandleChange = event => {
    setCount(event.target.value);
  };
  const intervalRef = useRef();

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const FetchData = async () => {
      setIsError(false);
      try {
        axios.get(Spot_API, { cancelToken: source.CancelToken }).then(res => {
          setG965B(res.data.G965B.bid_asso);
          setOffer(res.data.G965B.offer_asso);
          setJiwelryBid(+G965B + 500);
          setJiwelryOffer((offer * 0.95).toFixed());
          setTime(res.data.G965B.time.slice(10, 16));
          setTimeDate(res.data.G965B.time.slice(0, 10));
          setInterestOffer(jiwelryOffer - 1000);
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
          setIsError(error);
        } else {
          throw error;
        }
      }
    };

    const id = setInterval(() => {
      FetchData();
    }, 3000);

    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
      console.log("unmount");
      source.cancel();
    };
  }, [G965B, interestOffer, jiwelryOffer, offer, timeDate]);

  const Bangkok = moment.tz(timeDate, "Asia/Bangkok");
  const TimeDate = Bangkok.format("D MMMM YYYY");

  return (
    <React.Fragment>
      {isError && <div>Something went wrong ...</div>}
      <RouteLink to="/association" html="ราคาทองสมาคมค้าทองคำกรอกเอง" />
      <Box mr={[140]} mt={[91]}>
        <Flex justifyContent="flex-end">
          <div style={{ fontSize: "45px", fontWeight: "500", color: "#FFF" }}>
            {TimeDate}
          </div>
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
              fontWeight: "500",
              color: "#FFF"
            }}
          >
            เวลา&nbsp; {time} น.
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
    </React.Fragment>
  );
};

export default GoldAssociation;
