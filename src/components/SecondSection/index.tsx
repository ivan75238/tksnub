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
  background-color: rgb(230, 230, 239);
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  width: 22%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.12);
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-radius: 10px 10px 0 0;
  background-color: #f28d63;
  font-weight: 600;
  font-size: 22px;
  color: #fff;
`;

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  padding: 8%;
`;

const LisWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 210px;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;

  svg {
    width: 18px;
    min-width: 18px;
    height: 18px;
    margin-right: 8px;
    fill: rgba(26, 26, 26, 0.6);
    margin-top: 3px;
  }

  span {
    font-size: 16px;
    line-height: 1.4em;
    color: rgba(26, 26, 26, 0.6);
    max-width: 100%;
  }
`;

const PriceBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(26, 26, 26, 0.6);

  span {
    color: #eb6075;
    font-weight: 700;
    margin: 0 8px;
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

const SecondSection: FC = () => {
  const cards = [
    {
      title: "Квартирный переезд",
      list: [
        "Подадим транспорт с грузчиками или без",
        "Бесплатно спустим и поднимем на этаж",
        "Бережно упакуем ваши вещи и вашу мебель",
      ],
      price: 1700,
    },
    {
      title: "Офисный переезд",
      list: [
        "Бесплатно оценим ваш переезд",
        "Зафиксируем цену вашего переезда",
        "Произведем расстановку и организацию рабочих мест",
      ],
      price: "2 200",
    },
    {
      title: "Дачный переезд",
      list: [
        "Подадим транспорт с грузчиками или без",
        "5 посадочных мест в салоне автомобиля",
        "В любую точку Московской области",
      ],
      price: "3 000",
    },
    {
      title: "Доп. услуги",
      list: [
        "Грузчики",
        "Грузовое такси",
        "Упаковка мебели и вещей",
        "Перевозка мебели",
        "Перевозка бытовой техники",
      ],
      price: "1 500",
    },
  ];

  return (
    <Wrapper>
      <Content>
        {cards.map((item, i) => {
          return (
            <CardWrapper key={i}>
              <CardHeader>{item.title}</CardHeader>
              <CardBody>
                <LisWrapper>
                  {item.list.map((el, j) => {
                    return (
                      <ListItem key={`${i}-${j}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.25"
                          height="19.656"
                          viewBox="0 0 23.25 19.656"
                          data-prefix="ikq5rjwh1"
                        >
                          <path
                            d="M7.638 19.655a1 1 0 0 1-.725-.308l-6.624-6.9a.986.986 0 0 1 .035-1.4 1.006 1.006 0 0 1 1.414.034l5.844 6.087L21.49.351a1.006 1.006 0 0 1 1.407-.138.986.986 0 0 1 .14 1.4L8.411 19.292a1 1 0 0 1-.736.362h-.037z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <span>{el}</span>
                      </ListItem>
                    );
                  })}
                </LisWrapper>
                <PriceBlock>
                  от <span>{item.price}</span> руб
                </PriceBlock>
                <Button onClick={scrollToOrderForm}>Заказать</Button>
              </CardBody>
            </CardWrapper>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default SecondSection;
