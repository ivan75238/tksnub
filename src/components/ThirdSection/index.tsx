import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url("./bg2.png");
  background-repeat: no-repeat;
  background-position: center top;
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 32px;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const ImgBlock = styled.div`
  border-radius: 30px;
  width: 400px;
  height: 400px;
  overflow-x: hidden;
  overflow-y: hidden;
  box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    margin-top: 16px;
    max-width: 400px;
    width: 100%;
  }
`;

const TextBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  width: 45%;

  h1 {
    font-weight: 900;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 40px;
    color: rgb(26, 26, 26);
  }

  span {
    text-align: end;
    font-size: 18px;
    font-weight: 400;
    color: rgb(26, 26, 26);
  }

  @media (max-width: 910px) {
    text-align: start;

    span {
      text-align: start;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }

    span {
      text-align: center;
    }
  }
`;

const ThirdSection: FC = () => {
  return (
    <Wrapper>
      <Content>
        <ImgBlock>
          <img src={"./MainSection.jpg"} />
        </ImgBlock>
        <TextBlock>
          <h1>Заказ машины</h1>
          <span>
            Транспортная Компания «ТКCнаб» профессионально осуществляет
            перевозку грузов. <br/>
            Для ваших задач мы готовы
            предоставить варианты автомобилей с грузоподъемностью 10 или 12 тонн.
          </span>
        </TextBlock>
      </Content>
    </Wrapper>
  );
};

export default ThirdSection;
