import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 40px;
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  background-color: teal;
`;
const Body = styled.div`
  background-color: tomato;
  height: 570px;
  width: 100%;
  display: flex;
`;
const Days = styled.div`
  width: 100%;
  height: 30px;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 3px;
`;
const Day = styled.span`
  text-align: center;
  font-weight: 600;
`;
const Schedule = () => {
  const days = ["월", "화", "수", "목", "금"];
  return (
    <Wrapper>
      <Header>
        <span>시간표</span>
      </Header>
      <Body>
        <Days>
          {days.map((day) => (
            <Day key={day}>{day}</Day>
          ))}
        </Days>
      </Body>
    </Wrapper>
  );
};

export default Schedule;
