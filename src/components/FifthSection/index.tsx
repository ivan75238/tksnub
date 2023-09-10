import styled from "styled-components";
import { FC, useState, useMemo, useCallback } from "react";
import dayjs from "dayjs";
import Checkbox from "../Checkbox";
import PersonalDataModal from "../PersonalDataModal";
import InputMask from "react-input-mask";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 125px;
  padding-bottom: 40px;
  background-color: rgb(47, 58, 73);
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 32px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 4px;
`;

const Message = styled.div`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 300;
  margin-top: 40px;
`;

const CheckboxWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0px;

  .label {
    color: rgba(255, 255, 255, 0.75) !important;
    line-height: 16px;
  }

  .link {
    text-decoration: underline;
    color: rgba(255, 255, 255, 1) !important;
    line-height: 16px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 16px;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.45);
  }

  &:focus {
    border-color: rgb(255, 13, 34);
  }
`;

const InputPhoneWrapper = styled.div`
  input {
    margin-bottom: 16px;
    padding: 16px;
    font-size: 18px;
    border-radius: 10px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.5);
    width: 400px;
    color: #fff;

    &:hover {
      background-color: rgba(0, 0, 0, 0.45);
    }

    &:focus {
      border-color: rgb(255, 13, 34);
    }
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 16px;
  padding: 16px;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  max-width: 400px;
  min-width: 400px;
  min-height: 135px;
  max-height: 135px;
  color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.45);
  }

  &:focus {
    border-color: rgb(255, 13, 34);
  }
`;

const Button = styled.div<{ disabled: boolean }>`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "rgb(151, 151, 156)" : "#eb6075"};
  font-size: 18px;
  font-weight: 500;
  width: 400px;

  &:hover {
    box-shadow: inset 0px 0px 0px 100px rgba(0, 0, 0, 0.1);
  }
`;

const FifthSection: FC = () => {
  const [openPersonalDataModal, setOpenPersonalDataModal] = useState(false);
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  /**
   * Получение номера телефона, без всяких символов
   */
  const phoneNumbers = useMemo(
    () => parseInt(phone.replace(/[^\d]/g, "")),
    [phone]
  );

  /**
   * Определение блокировки кнопки запроса
   */
  const disabled = useMemo(() => {
    return !agree || phoneNumbers.toString().length !== 11 || !name.trim();
  }, [agree, phoneNumbers, name]);

  /**
   * Функция авторизации в сервисе SMSAERO
   */
  const smsAeroAuth = useCallback(() => {
    const headers = {
      auth: {
        username: process.env.REACT_APP_SMS_AERO_LOGIN,
        password: process.env.REACT_APP_SMS_AERO_PSW
      }
    }
    return axios.post('https://email:api_key@gate.smsaero.ru/v2/auth', {}, headers);
  }, []);

  /**
   * Функция отправки запроса на обратный звонок
   */
  const sendRequest = useCallback(() => {
    /*const data = {
      login: process.env.REACT_APP_SMS_LOGIN,
      psw: process.env.REACT_APP_SMS_PSW,
      phones: "+79086587883",
      mes: `Заказ: тел: +${phoneNumbers.toString()} имя: ${name}`,
    };
    axios.get(`https://smsc.ru/sys/send.php?login=${data.login}&psw=${data.psw}&phones=${data.phones}&mes=${data.mes}`);*/
    const data = {
      login: process.env.REACT_APP_SMS_LOGIN,
      psw: process.env.REACT_APP_SMS_PSW,
      phones: "+79086587883",
      mes: `Заказ: тел: +${phoneNumbers.toString()} имя: ${name}`,
    };
    smsAeroAuth()
    .then(() => {

    })
  }, [phoneNumbers, name]);

  return (
    <Wrapper id="order-form">
      <Content>
        <Title>Нужно что-то перевезти?</Title>
        <Message>Закажите обратный звонок и мы решим ваш вопрос!</Message>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя*"
        />
        <InputPhoneWrapper>
          <InputMask
            placeholder="Телефон*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="+7 (999) 999-99-99"
            maskChar=" "
          />
        </InputPhoneWrapper>
        {/*<Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Опишите груз"
  />*/}
        <Button
          onClick={() => (disabled ? null : sendRequest())}
          disabled={disabled}
        >
          Заказать обратный звонок
        </Button>
        <CheckboxWrapper>
          <Checkbox value={agree} onChange={setAgree} label={""} />
          <span className={"label"}>
            Я согласен(на) на обработку{" "}
            <span
              className={"link"}
              onClick={() => setOpenPersonalDataModal(true)}
            >
              персональных данных
            </span>
          </span>
        </CheckboxWrapper>
      </Content>
      <Copyright>Copyright © 2022 - {dayjs().format("YYYY")} ТКСнаб</Copyright>
      {openPersonalDataModal && (
        <PersonalDataModal hideModal={() => setOpenPersonalDataModal(false)} />
      )}
    </Wrapper>
  );
};

export default FifthSection;
