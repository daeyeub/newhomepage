import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

function fetchTime() {
  return () => new Date();
}
const Time = styled.div`
  font-size: 100px;
  @import url("https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&display=swap");
  font-family: "DynaPuff", cursive;
`;
const Clock = () => {
  const { isLoading, data } = useQuery("times", fetchTime, {
    refetchInterval: 1000,
  });

  const time = data.toString().slice(16, -17);
  return <Time>{time}</Time>;
};

export default Clock;
