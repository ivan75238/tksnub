import styled from "styled-components";
import { FC } from "react";
import { scrollToOrderForm } from "../../functions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 125px;
  padding-bottom: 100px;
  background-color: rgb(230, 230, 239);
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 40px;
  color: rgb(26, 26, 26);

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const CarsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 415px;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.12);

  img {
    width: 380px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    font-weight: 600;
    font-size: 22px;
    margin: 16px 0;
    color: rgb(26, 26, 26);
  }

  span {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 400;
    color: rgb(26, 26, 26);
    text-align: center;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    max-width: 415px;
    width: 100%;

    img {
      max-width: 380px;
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`;

const Button = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  color: #fff;
  cursor: pointer;
  background-color: #eb6075;
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;

  &:hover {
    box-shadow: inset 0px 0px 0px 100px rgba(0, 0, 0, 0.1);
  }
`;

const FourthSection: FC = () => {
  const cars = [
    {
      img: "./sklad1.jpg",
      title: "Хранение груза",
      description: "Складские помещения для вашего груза в г. Красноярск и рп. Магистральный. Примем на склад и бережно сохраним ваш груз до дня погрузки в транспорт или Вашего приезда",
    },
    {
      img: "./srtah1.jpg",
      title: "Страхование груза",
      description:
        "Страхуем груз по вашему желанию от повреждений и утраты. Страхование осуществляется при предъявлении документов на груз на сумму 0.1% от стоимости товара",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Title>Дополнительные услуги</Title>
        <CarsWrapper>
          {cars.map((car, i) => {
            return (
              <CardWrapper key={i}>
                <img src={car.img} />
                <p>{car.title}</p>
                <span>{car.description}</span>
                <Button onClick={scrollToOrderForm}>Заказать звонок</Button>
              </CardWrapper>
            );
          })}
        </CarsWrapper>
      </Content>
    </Wrapper>
  );
};

export default FourthSection;
