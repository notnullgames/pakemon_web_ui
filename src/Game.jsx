import { usePakemon } from './pakemon'

export default function Game () {
  const { session } = usePakemon()
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}
