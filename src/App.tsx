import styled from "styled-components";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
    </Wrapper>
  );
}

export default App;
