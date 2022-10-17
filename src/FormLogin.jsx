import { useState } from 'react'

import Button from './Button'
import Input from './Input'
import { usePakemon } from './pakemon'

const l = new URL(document.location)
l.port = l.protocol === 'https:' ? 8083 : 8081
l.pathname = '/api'
l.search = ''
l.hash = ''
const DEFAULT_URL = l.toString()

function FormLogin () {
  const { setAuth, setSession, setHost } = usePakemon()
  const [error, setError] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hostInput, setHostInput] = useState(DEFAULT_URL)

  const onSubmit = async e => {
    e.preventDefault()
    const auth = btoa(`${username}:${password}`)
    try {
      setError(false)
      const session = await fetch(`${hostInput}/session`, { headers: { Authorization: `Basic ${auth}` } }).then(r => r.json())
      setAuth(auth)
      setHost(hostInput)
      setSession(session)
    } catch (e) {
      setError('Could not login.')
    }
  }

  return (
    <div style={{ background: '#000 url(bg.webp) no-repeat', backgroundSize: 'cover' }} className='h-screen overflow-hidden flex items-center justify-center'>
      <form onSubmit={onSubmit}>
        <div className='p-2 flex gap-2  items-center justify-center'>
          <div className='text-white' style={{ textShadow: '2px 2px 4px black' }}>
            <h1 className='font-medium text-5xl'>Pakémon</h1>
            <p>
              Login to your Pakémon to get started.
            </p>
          </div>
          <div className='bg-gray-50 p-8 flex flex-col rounded-md'>
            {
              error && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4' role='alert'>
                  <span className='block sm:inline'>{error}</span>
                </div>
              )
            }
            <Input label='Username' name='username' value={username} onChange={setUsername} required />
            <Input label='Password' name='password' value={password} onChange={setPassword} type='password' required />
            <Input label='Host' name='host' value={hostInput} onChange={setHostInput} required />
            <Button>Login</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormLogin
