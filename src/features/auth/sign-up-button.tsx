'use client'

import { Button } from '~/components/ui'

export default function SignUpButton() {
  return (
    <Button
      onPress={() => alert('Sign Up!')}
      type="button"
    >
      Sign up
    </Button>
  )
}
