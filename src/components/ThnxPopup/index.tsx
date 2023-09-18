import { FC } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 16px;
  position: relative;

  @media (max-width: 399px)  {
    width: 95%;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  svg {
    fill: rgba(0, 0, 0, 0.7);
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.div`
  color: rgb(26, 26, 26);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 399px)  {
    text-align: center;
  }
`;

const Information = styled.div`
  width: 100%;
  text-align: center;
  overflow: auto;
  color: rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 400;
  margin-top: 16px;
`;

interface Props {
    hideModal: () => void;
}

const ThnxPopup: FC<Props> = ({hideModal}) => {
  return (
    <ModalWrapper>
      <Modal>
        <IconWrapper onClick={hideModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 22 22"
          >
            <path
              d="M21,21.8c-0.2,0-0.4-0.1-0.6-0.2L11,12.2l-9.4,9.4c-0.3,0.3-0.9,0.3-1.2,0c-0.3-0.3-0.3-0.9,0-1.2L9.8,11
 L0.4,1.6c-0.3-0.3-0.3-0.9,0-1.2s0.9-0.3,1.2,0L11,9.8l9.4-9.4c0.3-0.3,0.9-0.3,1.2,0c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6
 L12.2,11l9.4,9.4c0.3,0.3,0.3,0.9,0,1.2C21.4,21.8,21.2,21.8,21,21.8z"
            ></path>
          </svg>
        </IconWrapper>
        <Title>Звонок успешно заказан</Title>
        <Information>Благодарим вас за обращение! Наш сотрудник свяжется с вами!</Information>
      </Modal>
    </ModalWrapper>
  );
};

export default ThnxPopup;
