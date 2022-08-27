import styled from "styled-components";
import Clock from "./components/Clock";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url("https://img.hankyung.com/photo/202101/AKR20210119058800052_02_i_P4.jpg");
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2px;
`;
const Header = styled.div`
  box-sizing: border-box;
  background-color: teal;
  grid-column: 1/-1;
  grid-row: 1/2;
  padding: 5px 20px;
`;
const Body = styled.div`
  background-color: wheat;
  grid-column: 1/-1;
  grid-row: 2/6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  background-color: tomato;
  grid-column: 1/-1;
  grid-row: 6/7;
`;
const Logo = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&display=swap");
  font-family: "DynaPuff", cursive;
  font-size: 70px;
  color: white;
`;
const Box = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
`;
const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  &:hover {
    button {
      color: white;
      transform: rotateZ("30");
    }
  }
`;
function App() {
  return (
    <>
      <Container>
        <Header>
          <Logo>Holy</Logo>
        </Header>
        <Body>
          <Box>
            <Todo>
              <span>hello</span>
              <button>X</button>
            </Todo>
          </Box>
        </Body>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
