import styled from "styled-components";
import { IoClose, IoCheckmark } from "react-icons/io5";

export const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  padding: 32px 48px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: #1e1e1e;
  background-color: transparent;
  padding: 0;
  font-weight: 700;
  font-size: 18px;

  button {
    max-height: 25px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: all.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const FormMain = styled.main`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 18px;
  }

  input {
    border: none;
    color: #1e1e1e;
    background-color: #f5f5f5;
    height: 30px;
    width: 100%;
    padding-left: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  button {
    background-color: #b4ecb4;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
    width: 150px;
    height: 35px;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const CloseIcon = styled(IoClose)``;

export const CheckIcon = styled(IoCheckmark)``;
