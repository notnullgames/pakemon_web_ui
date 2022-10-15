import FormLogin from './FormLogin'
import { usePakemon } from './pakemon'
import Game from './Game'

function App () {
  const { auth } = usePakemon()
  return auth ? <Game /> : <FormLogin />
}

export default App
