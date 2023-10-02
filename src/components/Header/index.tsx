import styled from "styled-components";
import { FC } from "react";
import { scrollToOrderForm } from "../../functions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 800px) {
    padding: 16px;
  }
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 28px;
  line-height: 32px;

  span {
    font-weight: 800;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const OrgType = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #bcbcbc;
  line-height: 22px;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Phone = styled.div`
  font-size: 20px;

  span {
    font-weight: 800;
    margin-left: 4px;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

const Button = styled.div`
  background-color: rgba(230, 230, 230, 1);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: #eb6075;
  }

  svg {
    width: 19px;
    fill: #fff;
  }

  span {
    font-weight: 800;
  }

  &:hover {
    background-color: #d9d9d9;

    div {
      box-shadow: inset 0px 0px 0px 100px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1200px) {
    padding: 4px 8px;

    div {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <Content>
        <NameWrapper>
          <Name>
            <span>ТКС</span>наб
          </Name>
          <OrgType>курьерская служба</OrgType>
        </NameWrapper>
        <RightBlock>
          <Phone>
            +7 (983)<span>693-53-53</span>
          </Phone>
          <Button onClick={scrollToOrderForm}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                data-prefix="i5s7w6tfx"
              >
                <path d="M0 0h48v48H0V0z" fill="none"></path>
                <path d="M13.2 21.6c2.9 5.7 7.5 10.3 13.2 13.2l4.4-4.4c.5-.5 1.3-.7 2-.5 2.2.7 4.6 1.1 7.1 1.1 1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2C21.2 42 6 26.8 6 8c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2 0 2.5.4 4.9 1.1 7.1.2.7.1 1.5-.5 2l-4.4 4.5z"></path>
              </svg>
            </div>
            <p>
              Заказать <span>звонок</span>
            </p>
          </Button>
        </RightBlock>
      </Content>
    </Wrapper>
  );
};

export default Header;
