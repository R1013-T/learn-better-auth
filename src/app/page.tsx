import Image from 'next/image'
import { ThemeSwitcher } from '~/components/theme-switcher'
import SignUpButton from '~/features/auth/sign-up-button'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header>
        <h1>Learn Better Auth</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <SignUpButton />
        <ThemeSwitcher />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <ul>
          <li>✓Email and Password</li>
          <li>- Email Verification</li>
          <li>- OAuth</li>
        </ul>
      </footer>
    </div>
  )
}
