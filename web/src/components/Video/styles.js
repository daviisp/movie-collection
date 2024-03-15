import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 10px;
  height: 200px;
  width: 250px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: #1e1e1e;
    font-size: 16px;
    text-align: center;
  }

  a {
    border-left: 3px solid #bbb;
    padding-left: 10px;
    max-width: 230px;
    color: #999;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  svg {
    height: 20px;
    width: 20px;
    color: ${(props) => (props.liked ? "#3ea6ff" : "#1e1e1e")};
  }

  &:hover {
    transform: scale(1.1);
  }
`;
