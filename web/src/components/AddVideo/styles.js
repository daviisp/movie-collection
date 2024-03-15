import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

export const AddVideoButton = styled.button`
  list-style: none;
  border: 5px dashed #fff;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 18px;
  height: 200px;
  width: 250px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(IoAdd)`
  stroke: #fff;
  width: 64px;
  height: 64px;
`;
