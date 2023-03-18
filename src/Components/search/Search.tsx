import { AiOutlineSearch } from 'react-icons/ai'
import { Container } from './style'

export function Search () {
  return (
    <Container>

      <div className='search'>
        <AiOutlineSearch className='searchIcon' />
        <input 
          type="search" 
          placeholder='Search for a country'
        />
      </div>

        <select className='select'>
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>América</option>
          <option>Ásia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
    </Container>
  )
}