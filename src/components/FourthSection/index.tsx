import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: rgb(230, 230, 239);
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
    flex-direction: column;
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
  align-items: flex-start;
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
    text-align: start;
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
const FourthSection: FC = () => {
  return (
    <Wrapper>
      <Content>
        <TextBlock>
          <h1>Условия погрузки</h1>
          <span>
            В первую черередь погрузке подлежит скоропортящийся товар, далее
            остальной груз. <br />
            При отсутствии места в машине груз остается на складе и будет
            загружен в следующую машину. <br />
            Так же определенный груз принимаем на загрузку только в упаковке (
            стекло, зеркала, мебель и т. п.)
          </span>
        </TextBlock>
        <ImgBlock>
          <img src={"./uploading.jpg"} />
        </ImgBlock>
      </Content>
    </Wrapper>
  );
};

export default FourthSection;
