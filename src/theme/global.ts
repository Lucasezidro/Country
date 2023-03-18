import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --dark-primary: #111517;
    --dark-secondary: #202c37;
    --dark-thirdy: #2b3945;
    --light-primary: #858585;
    --light-secondary: #fafafa;
    --light-thirdy: #ffffff;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--dark-secondary);
    color: var(--light-thirdy);
    font-family: "Inter", sans-serif;
  }
  @media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}
  @media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
} 
`;
