import { createContext, useContext, useState, useEffect } from 'react'

const context = createContext()

export function PakemonProvider ({ children }) {
  const [auth, setAuth] = useState(window.localStorage.auth)
  const [session, setSession] = useState()
  const [host, setHost] = useState(window.localStorage.host)
  useEffect(() => {
    const i = setInterval(() => {
      if (auth && host) {
        fetch(`${host}/session`, { headers: { Authorization: `Basic ${auth}` } })
          .then(r => r.json()).then(setSession)
          .catch(e => {
            window.localStorage.removeItem('auth')
            setAuth(false)
          })
      }
    }, 1000)
    return () => clearInterval(i)
  }, [auth, host])
  return (
    <context.Provider value={{
      auth,
      session,
      setSession,
      host,
      setHost: h => {
        window.localStorage.host = h
        setHost(h)
      },
      setAuth: a => {
        window.localStorage.auth = a
        setAuth(a)
      }
    }}
    >{children}
    </context.Provider>
  )
}

export const usePakemon = () => useContext(context)
