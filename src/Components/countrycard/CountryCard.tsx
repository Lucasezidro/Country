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

        <span>Population: <span className="results">{population}</span></span>
        <span>Region: <span className="results">{region}</span></span>
        <span>Capital: <span className="results">{capital}</span></span>
      </div>

    </Container>
  )
}