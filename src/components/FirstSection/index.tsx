import styled from "styled-components";
import { FC } from "react";
import { scrollToOrderForm } from "../../functions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url("./bg1.png");
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: bottom;
  background-attachment: scroll, scroll, scroll, scroll;
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    margin-top: 0;
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 68, 84);
    margin-bottom: 24px;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
    width: 400px;
    margin-top: 0;
    margin-bottom: 16px;
    color: rgb(26, 26, 26);
  }

  span {
    margin-bottom: 48px;
    font-size: 20px;
    font-weight: 300;
    width: 600px;
    color: rgb(26, 26, 26);
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgBlock = styled.div`
  background-image: url("./FirstSectionImg.png");
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  width: 500px;
  height: 450px;
`;

const Button = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px 32px;
  color: #fff;
  cursor: pointer;
  background-color: rgb(255, 13, 34);
  font-size: 18px;
  font-weight: 500;

  &:hover {
    box-shadow: inset 0px 0px 0px 100px rgba(0, 0, 0, 0.1);
  }
`;

const FirstSection: FC = () => {
  return (
    <Wrapper>
      <Content>
        <LeftBlock>
          <p>Грузоперевозки в черте города и за ее пределами</p>
          <h1>Нужна машина для перевозки вещей?</h1>
          <span>
            Закажите обратный звонок и мы выполним вашу заявку быстро и
            качественно
          </span>
          <Button onClick={scrollToOrderForm}>Заказать звонок</Button>
        </LeftBlock>
        <RightBlock>
          <ImgBlock />
        </RightBlock>
      </Content>
    </Wrapper>
  );
};

export default FirstSection;
