import { useEffect, useState } from "react";
import { CountryCard } from "../countrycard/CountryCard";
import { Container } from "./style";
import { api } from "../../api/api";

export function Country () {
  const [countrys, setCountry] = useState<any>()

  useEffect(() => {
    api.get('all').then(response => {
      const data = response.data

      setCountry(data)
    })
  }, [])

  return (
    <Container>
      {countrys.slice(0, 8)?.map((country: any, i: React.Key) => {
        return (
          <CountryCard 
            key={i}
            image={country.flags.svg}
            title={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
      />
        )
      })}
    </Container>
  )
}