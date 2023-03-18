import { BsFillMoonFill } from 'react-icons/bs'
import { Container } from './style'

export function Navbar () {
  return (
    <Container>
      <h1>Where in the world ?</h1>

      <button>
        <BsFillMoonFill />
        Dark Mode
      </button>
    </Container>
  )
}