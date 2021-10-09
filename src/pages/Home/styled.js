import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 5px;
  font-family: "Lato", sans-serif;
  border: 1px solid #3d5467;
  background-color: #8aa29e;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-between;
`;

export const Card = styled.li`
  display: flex;
  width: 22%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  min-width: 280px;
  border: 1px solid #3d5467;
  margin: 2px;
  border-radius: 10px;
  padding: 5px;
`;

export const BackHome = styled.span`
  text-transform: uppercase;
  padding: 5px;
  margin: 2%;
`;
