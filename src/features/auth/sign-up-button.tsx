'use client'

import { Button } from '~/components/ui'

export default function SignUpButton() {
  return (
    <Button
      // eslint-disable-next-line no-alert
      onPress={() => alert('Sign Up!')}
      type="button"
    >
      Sign up
    </Button>
  )
}
