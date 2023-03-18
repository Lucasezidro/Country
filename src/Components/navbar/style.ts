import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  height: 50px;
  background: var(--dark-thirdy);

  h1 {
    font-size: 28px;
    position: relative;
    bottom: 10px;
    left: 30px;
  }

  button {
    width: 150px;
    position: relative;
    right: 30px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    background: transparent;
    border: none;
    color: var(--light-thirdy);
    font-size: 15px;
    border-radius: 8px;

    &:hover {
      background: var(--dark-secondary);
      cursor: pointer;
    }
  }
`