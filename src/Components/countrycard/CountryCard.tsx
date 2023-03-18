import { Container } from "./style";

interface CountryProps {
  title: string;
  population: number;
  region: string;
  capital: string;
  image: string;
}

export function CountryCard ({ title, population, region, capital, image }: CountryProps) {
  return (
    <Container>
      <img className="image" src={image} alt="" />

      <div className="info">
        <strong className="country-name">{title}</strong>

        <span>Population: <span className="result">{population}</span></span>
        <span>Region: <span className="result">{region}</span></span>
        <span>Capital: <span className="result">{capital}</span></span>
      </div>

    </Container>
  )
}