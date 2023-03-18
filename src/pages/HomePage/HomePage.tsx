import { Country } from "../../Components/Country/Country";
import { Navbar } from "../../Components/navbar/Navbar";
import { Search } from "../../Components/search/Search";

export function HomePage () {
  return (
    <>    
      <Navbar />
      <Search />
      <Country />
    </>
  )
}