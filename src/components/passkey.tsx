'use client'

import { useEffect } from 'react'
import { authClient } from '~/lib/auth-client'
import { Button } from './ui'

export default function Passkey() {
  return (
    <>
      <Button
        onPress={async () => {
          const data = await authClient.passkey.addPasskey();
          console.dir(data)
        }}
      >
        Add Passkey
      </Button>
      <Button
        onPress={async () => {
          const data = await authClient.signIn.passkey()
          console.dir(data)
        }}
      >
        Sign In with Passkey
      </Button>
    </>
  )
}
