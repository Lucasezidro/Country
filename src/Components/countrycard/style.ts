import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background: var(--dark-thirdy);
  border-radius: 8px;

  .image {
    width: 300px;
    height: 150px;
    background: red;
    border-radius: 8px 8px 0 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;

    strong {
      margin-bottom: 15px;
    }

    span {
      font-size: 14px;
      color: var(--light-secondary);
    }

    .result {
      color: var(--light-primary);
    }
  }
`