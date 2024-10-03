import clsx from 'clsx'
import { FiExternalLink } from 'react-icons/fi'
import Logo from './assets/ha-logo.svg?react'
import { Link } from './components'
import { links } from './data'

const App = () => (
  <main
    className={clsx(
      'mx-auto min-h-screen max-w-xl py-12 px-4 xs:px-8',
      'flex flex-col items-center justify-center'
    )}
  >
    <div className="rounded-full border border-slate-800 p-5">
      <Logo className="h-16 w-16" />
    </div>
    <section className="my-12 flex w-full flex-col space-y-4">
      {links.map((link) => (
        <Link
          Icon={link.Icon}
          link={link.url}
          title={link.name}
          key={link.name}
        />
      ))}
    </section>
    <footer className="flex flex-col items-center space-y-2 text-sm font-medium">
      <p>&copy;{new Date().getFullYear()} by Hendra Agil</p>
      <hr className="w-full border-slate-800" />
      <a
        href="https://github.com/hendraaagil/links"
        className="flex items-center hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
        <FiExternalLink className="ml-2" />
      </a>
    </footer>
  </main>
)

export default App
