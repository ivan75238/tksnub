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
  width: 600px;
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
  height: 400px;
  overflow: auto;
  color: rgb(26, 26, 26);
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`;

interface Props {
    hideModal: () => void;
}

const PersonalDataModal: FC<Props> = ({hideModal}) => {
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
        <Title>Пользовательское соглашение</Title>
        <Information>
          Я согласен(на) на обработку моих персональных данных
          <br />
          Настоящим Я, действуя своей волей и в своем интересе, при размещении
          (вводе) своих персональных данных на Интернет сайте ТКСнаб.рф
          индивидуального предпринимателя Шевченко Александр Александрович (ИНН 381808300197, далее - Оператор)
          подтверждаю свое согласие на
          обработку указанных мной персональных данных Оператором в целях
          предложения мне услуг, новых услуг, предлагаемых Оператором, в целях
          проведения опросов, анкетирования, рекламных и маркетинговых
          исследований в отношении услуг, предоставляемых Оператором, в том
          числе путем осуществления прямых контактов со мною посредством средств
          связи, указанных мной на настоящем сайте.Настоящее право (согласие)
          предоставляется на осуществление любых действий в отношении моих
          персональных данных, которые необходимы и желаемы для достижения
          вышеуказанных целей, включая, без ограничения, сбор, систематизацию,
          накопление, хранение, уточнение (обновление, изменение),
          использование, передачу, обезличивание, блокирование и уничтожение
          персональных данных, под которыми понимаются все данные, указанные
          мной на настоящем сайте. Настоящим подтверждаю, что уведомлен о том,
          что обработка персональных данных осуществляется Оператором любым
          способом, в том числе как с использованием средств автоматизации
          (включая программное обеспечение), так и без использования средств
          автоматизации (с использованием различных материальных носителей,
          включая бумажные носители).
        </Information>
      </Modal>
    </ModalWrapper>
  );
};

export default PersonalDataModal;
