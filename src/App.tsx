import clsx from 'clsx'
import { ReactComponent as Logo } from './assets/ha-logo.svg'

function App() {
  return (
    <main
      className={clsx(
        'flex justify-center items-center',
        'min-h-screen bg-gradient-to-br from-brand-blue to-brand-light'
      )}
    >
      <Logo className="w-24 h-24" />
    </main>
  )
}

export default App
