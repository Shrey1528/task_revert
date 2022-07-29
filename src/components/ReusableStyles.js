import styled, { css } from "styled-components";

export const Div = styled.div`
  ${(props) =>
    props.main &&
    css`
      color: #ffffff;
      margin-top: -1.5rem;
      margin-left: -0.47rem;
      margin-right: -0.47rem;
      height: 30vh;
      width: 100%;
    `}
  ${(props) =>
    props.sub &&
    css`
      margin-left: 5rem;
      margin-right: 5rem;
      padding-top: 3rem;
      h1 {
        text-align: center;
      }
      .addedtask {
        font-size: 1.1rem;
        color: black;
      }
      p {
        margin-top: 2rem;
        font-size: 1.2rem;
      }
    `}
  ${(props) =>
    props.task &&
    css`
      margin-top: 4rem;
      font-size: 1.2rem;
    `}
    ${(props) =>
    props.field &&
    css`
      display: flex;
      flex-direction: row;
      gap: 3rem;
      margin-top: 2rem;

      input {
        width: 50%;
        height: 4vh;
        border-radius: 5px;
        padding-left: 1rem;
        font-size: 1rem;
        color: #000000;
        background-color: #eee;
        &:focus {
          outline: none;
        }
      }
    `}
    ${(props) =>
    props.task_con &&
    css`
      width: 90%;
      margin: 0 auto;
      margin-top: 10rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 1rem;
      font-size: 1rem;
    `}

    ${(props) =>
    props.con &&
    css`
      display: flex;
      gap: 10px;
      color: #ffffff;
      font-size: 1rem;
    `}
    ${(props) =>
    props.cards &&
    css`
      border: 1px solid black;
      font-size: 0.85rem;
      background-color: #2f2f2f;
      color: #ffffff;
      border-radius: 20px;
      width: 90%;
      min-height: 30%;
      p {
        padding: 0.5rem 1.5rem;
        overflow: hidden;
        width: 75%;
        line-height: 1rem;
        overflow: hidden;
      }
      hr {
        border: 1px solid #5c5c5c;
      }
    `}
    ${(props) =>
    props.complete &&
    css`
      display: flex;
      justify-content: space-between;
      padding: 0.1rem 1.25rem;
    `}
    & input {
    background-color: #5c5c5c;
    color: white;
    &::placeholder {
      color: white;
    }
  }
`;

export const Button = styled.button`
  ${(props) =>
    props.submit &&
    css`
      padding: 0 50px;
      border-radius: 5px;
      font-size: 1rem;
      color: #ffffff;
      background-color: #c620a7;
      cursor: pointer;
    `}
  ${(props) =>
    props.delete &&
    css`
      border: none;
      background: none;
      font-size: 0.95rem;
      color: #afafaf;
      cursor: pointer;
      &:hover {
        color: #c620a7;
      }
    `}
    ${(props) =>
    props.marked &&
    css`
      padding: 10px 20px;
      width: 65%;
      border-radius: 5px;
      font-size: 0.75rem;
      margin: 1rem 0;
      color: #ffffff;
      background-color: #c620a7;
      border: none;
      cursor: pointer;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  align-items: center;
`;
