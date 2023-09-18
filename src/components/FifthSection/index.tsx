import styled from "styled-components";
import { FC, useState, useMemo, useCallback } from "react";
import dayjs from "dayjs";
import Checkbox from "../Checkbox";
import PersonalDataModal from "../PersonalDataModal";
import InputMask from "react-input-mask";
import axios from "axios";
import ThnxPopup from "../ThnxPopup";

axios.defaults.withCredentials = true;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 125px;
  padding-bottom: 40px;
  background-color: rgb(47, 58, 73);

  @media (max-width: 1200px) {
    padding-top: 60px;
  }
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
    padding: 0 16px 32px 16px;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 4px;

  @media (max-width: 1200px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Message = styled.div`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    font-size: 14px;
    text-align: center;
  }
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

  @media (max-width: 1200px) {
    font-size: 14px;
    margin-top: 24px;
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

  @media (max-width: 1200px)  {
    width: 100%;
    max-width: 400px;
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

  @media (max-width: 1200px)  {
    width: 100%;
    max-width: 400px;

    input {
      width: 100%;
      max-width: 400px;
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
  text-align: center;
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

  @media (max-width: 1200px)  {
    width: 100%;
    max-width: 400px;
  }
`;

const FifthSection: FC = () => {
  const [openPersonalDataModal, setOpenPersonalDataModal] = useState(false);
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [openThnxPopup, setOpenThnxPopup] = useState(false);

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
    return disabledButton || !agree || phoneNumbers.toString().length !== 11 || !name.trim();
  }, [agree, phoneNumbers, name, disabledButton]);

  /**
   * Функция отправки запроса на обратный звонок
   */
  const sendRequest = useCallback(() => {
    setDisabledButton(true);
    const phoneString = "8" + phoneNumbers.toString().substring(1)
    const mes = `Новый заказ! Имя: ${name} Тел: ${phoneString}`;
    setTimeout(() => setDisabledButton(false), 5000);
    axios.get(`/api.php?mes=${mes}`)
    .then(() => {
      setOpenThnxPopup(true);
    });
  }, [phoneNumbers, name]);

  /**
   * Изменение имени
   */
  const onChangeName = useCallback((val) => {
    if (val.length < 15) {
      setName(val);
    }
  }, []);

  return (
    <Wrapper id="order-form">
      <Content>
        <Title>Нужно что-то перевезти?</Title>
        <Message>Закажите обратный звонок и мы решим ваш вопрос!</Message>
        <Input
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
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
      {openThnxPopup && (
        <ThnxPopup hideModal={() => setOpenThnxPopup(false)} />
      )}
    </Wrapper>
  );
};

export default FifthSection;
