'use client'

import { useEffect, useState } from 'react'
import { Button, TextField } from '~/components/ui'
import { authClient } from '~/lib/auth-client'

export default function SignUpButton() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [user, setUser] = useState(null)

  useEffect(() => {
    void getSession()
  }, [])

  const getSession = async () => {
    const { data, error } = await authClient.getSession()
    // eslint-disable-next-line no-console
    console.dir({ data, error })
    setUser(data?.user || null)
  }

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: (ctx) => {
          // eslint-disable-next-line no-console
          console.dir('onRequest')
          // eslint-disable-next-line no-console
          console.dir(ctx)
        },
        onSuccess: (ctx) => {
          // eslint-disable-next-line no-console
          console.dir('onSuccess')
          // eslint-disable-next-line no-console
          console.dir(ctx)
        },
        onError: (ctx) => {
          // eslint-disable-next-line no-alert
          alert(ctx.error.message)
        },
      },
    )
    // eslint-disable-next-line no-console
    console.dir({ data, error })
  }

  const signIn = async () => {
    const { data, error } = await authClient.signIn.email({ email, password })
    // eslint-disable-next-line no-console
    console.dir({ data, error })
  }

  const logout = async () => {
    const { data, error } = await authClient.signOut()
    // eslint-disable-next-line no-console
    console.dir({ data, error })
  }

  return (
    <div className="flex flex-col gap-8">
      <TextField type="text" value={name} onChange={setName} label="Name" autoComplete="username webauthn" />
      <TextField type="email" value={email} onChange={setEmail} label="Email" autoComplete="email webauthn" />
      <TextField
        type="password"
        value={password}
        onChange={setPassword}
        label="Password"
        autoComplete="current-password webauthn"
      />

      <Button onPress={() => signUp()} type="button">
        Sign up
      </Button>
      <Button onPress={() => signIn()} type="button">
        Sign in
      </Button>
      <Button onPress={() => logout()} type="button">
        Logout
      </Button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
