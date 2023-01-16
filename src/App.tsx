import clsx from 'clsx'
import { FaDiscord, FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { ReactComponent as Logo } from './assets/ha-logo.svg'
import { Link } from './components'

const links = [
  {
    Icon: FaDiscord,
    name: 'Discord Server',
    url: 'https://discord.gg/VVvmVFyVE6',
  },
  {
    Icon: FaFacebookSquare,
    name: 'Facebook',
    url: 'https://facebook.com/hendraaagil',
  },
  {
    Icon: FaGithub,
    name: 'GitHub',
    url: 'https://github.com/hendraaagil',
  },
  {
    Icon: FaInstagram,
    name: 'Instagram',
    url: 'https://instagram.com/hendraaagil',
  },
  {
    Icon: FaLinkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hendraaagil',
  },
  {
    Icon: FaTelegram,
    name: 'Telegram',
    url: 'https://t.me/hendraaagil',
  },
  {
    Icon: FaTwitter,
    name: 'Twitter',
    url: 'https://twitter.com/hendraaagil',
  },
]

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-between p-8">
      <div className="rounded bg-brand-light bg-opacity-25 p-4 shadow">
        <Logo className="h-24 w-24" />
      </div>
      <section className="my-6 flex w-full flex-col space-y-6">
        {links.map((link) => (
          <Link Icon={link.Icon} link={link.url} title={link.name} key={link.name} />
        ))}
      </section>
      <footer className="flex space-x-2 font-medium">
        <p>&copy;{new Date().getFullYear()} by Hendra Agil</p>
        <p>|</p>
        <a href="https://github.com/hendraaagil/links" className="flex items-center hover:underline">
          Source Code
          <FiExternalLink className="ml-2" />
        </a>
      </footer>
    </main>
  )
}

export default App
