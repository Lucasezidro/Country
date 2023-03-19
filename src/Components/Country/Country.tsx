import { useEffect, useState } from "react";
import { CountryCard } from "../countrycard/CountryCard";
import { Container, Search } from "./style";
import { api } from "../../api/api";
import { AiOutlineSearch } from "react-icons/ai";

export function Country() {
  const [countrys, setCountry] = useState<any>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    api.get("all").then((response) => {
      const data = response.data;

      setCountry(data);
    });
  }, []);

  const filteredCountry =
    search.length > 0
      ? countrys.filter((country: any) => 
        country.name.common
          .toLowerCase()
          .replace(/[aáàãäâ]/, "a")
          .replace(/[eéèëê]/, "e")
          .replace(/[iíìïî]/, "i")
          .replace(/[oóòõöô]/, "o")
          .replace(/[uúùüû]/, "u")
          .includes(search)
          )
      : [];

  return (
    <>
      <Search>
        <div className="search">
          <AiOutlineSearch className="searchIcon" />
          <input 
            type="search" 
            placeholder="Search for a country"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>

        <select className="select">
          <option>Filter by Region</option>
          <option >Africa</option>
          <option>América</option>
          <option>Ásia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </Search>

      <Container>
        {search.length > 0 ? (
          <div className="result">
            {filteredCountry?.slice(0, 8)?.map((country: any, i: React.Key) => {
              return (
                <CountryCard
                  key={i}
                  image={country.flags.svg}
                  title={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })}
          </div>
        ) : (
          <div className="result">
            {countrys?.slice(0, 8)?.map((country: any, i: React.Key) => {
              return (
                <CountryCard
                  key={i}
                  image={country.flags.svg}
                  title={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })}
          </div>
        )}
      </Container>
    </>
  );
}
