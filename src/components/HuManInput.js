import React, { useState } from "react";
import { FormattedNumber } from "react-intl";
import { Flex, Box } from "rebass";

import { Number } from "./NumberFormat";
import { RouteLink } from "./RouteLink";
import { BoxSpot } from "./Box";

import Time from "./DateTime";

const HumanInput = () => {
  const [valueOffer, setValueOffer] = useState("21500");
  const [valueBid, setValueBid] = useState("21500");
  const [count, setCount] = useState("1");
  const [deposit, setDeposit] = useState("19000");

  // https://stackoverflow.com/questions/49275982/react-js-controlled-input-tolocalestring
  const valueOfferHandleChange = event => {
    setValueOffer(event.target.value.replace(/\D/g, ""));
  };

  const valueBidHandleChange = event => {
    setValueBid(event.target.value.replace(/\D/g, ""));
  };

  const countHandleChange = event => {
    setCount(event.target.value);
  };

  const depositHandleChange = event => {
    setDeposit(event.target.value);
  };

  function result(bid) {
    let output;
    output = bid * 0.95;
    return output;
  }

  const offerJiwelry = bid => {
    let b;
    b = +bid + 500;
    return b;
  };

  return (
    <div>
      <RouteLink to="/association" html="ราคาทองสมาคมค้าทองคำ Ausiris" />
      <Time value={count} handleChange={countHandleChange} />
      <Box mr={[85]} mt={[79]}>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <BoxSpot width={[1, 1 / 2, 1 / 4]} mr={[85]} mt={[1, 2]}>
            <Number value={valueOffer} handleChange={valueOfferHandleChange} />
          </BoxSpot>
          <BoxSpot width={[1, 1 / 2, 1 / 4]} mr={[26]} mt={[1, 2]}>
            <Number value={valueBid} handleChange={valueBidHandleChange} />
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
            <FormattedNumber value={offerJiwelry(valueOffer)} />
          </BoxSpot>
          <BoxSpot
            width={[1, 1 / 2, 1 / 4]}
            mt={[30]}
            mr={[26]}
            color="#cea931"
            fontSize={[90]}
          >
            <FormattedNumber value={result(valueBid).toFixed()} />
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
            fontSize={[90]}
          >
            <Number value={deposit} handleChange={depositHandleChange} />
          </BoxSpot>
        </Flex>
      </Box>
    </div>
  );
};

export default HumanInput;
