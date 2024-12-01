'use client'

import { useState } from 'react'
import { Button, TextField } from '~/components/ui'
import { authClient } from '~/lib/auth-client'

export default function SignUpButton() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

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

  return (
    <div className="flex flex-col gap-4">
      <TextField type="text" value={name} onChange={setName} label="Name" />
      <TextField
        type="password"
        value={password}
        onChange={setPassword}
        label="Password"
      />
      <TextField type="email" value={email} onChange={setEmail} label="Email" />

      <Button onPress={() => signUp()} type="button">
        Sign up
      </Button>
    </div>
  )
}
