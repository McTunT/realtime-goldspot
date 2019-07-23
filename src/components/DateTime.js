import React from "react";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import { Box, Flex } from "rebass";

import moment from "moment";
import "moment-timezone";
import "moment/locale/th";
import "../App.css";

moment.locale("th");

export default class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Current: [] };
  }

  timer() {
    this.setState({
      Current: this.state.Current
    });
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const date = new Date();
    return (
      <div style={{ color: "#fff" }}>
        <Box mr={[140]} mt={[89]}>
          <Flex justifyContent="flex-end">
            <Moment style={{ fontSize: "45px", fontWeight: "500" }} format="LL">
              {date}
            </Moment>
          </Flex>

          <Flex
            justifyContent="flex-end"
            style={{
              fontSize: "45px",
              fontWeight: "500"
            }}
          >
            <NumberFormat
              className="inputCount"
              value={this.props.value}
              onChange={this.props.handleChange}
            />
            เวลา:&nbsp;
            <Moment format="HH:mm  น.">{date}</Moment>
          </Flex>
        </Box>
      </div>
    );
  }
}
