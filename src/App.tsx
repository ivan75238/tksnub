import styled from "styled-components";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FifthSection from "./components/FifthSection";
import FourthSection from "./components/FourthSection";
import SixthSection from "./components/SixthSection";

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
        <SixthSection/>
    </Wrapper>
  );
}

export default App;
