import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;

    .searchIcon {
      position: absolute;
      left: 70px;
      font-weight: bold;
      font-size: 20px;
    }

    input {
      width: 400px;
      padding: 16px;
      background-color: var(--dark-thirdy);
      color: var(--light-thirdy);
      border: none;
      border-radius: 8px;

      &::placeholder {
        color: var(--light-thirdy);
        position: relative;
        left: 40px;
        font-weight: bold;
      }
    }

    &:focus {
      
    }
  }

  .select {
    width: 200px;
    padding: 16px;
    background-color: var(--dark-thirdy);
    border: none;
    border-radius: 8px;
    color: var(--light-thirdy);
    font-weight: bold;

    options {
      border-radius: 8px;
      border: none;
    }
  }
`

export const Container = styled.div`
  .result {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    left: 100px;
    gap: 50px;
    padding: 50px
  }
`