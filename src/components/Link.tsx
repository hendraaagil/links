import type { IconType } from 'react-icons'

export type LinkProps = {
  Icon: IconType
  link: string
  title: string
}

export const Link = ({ Icon, link, title }: LinkProps) => {
  return (
    <a
      href={link}
      className="group relative flex w-full items-center overflow-hidden rounded bg-brand-light bg-opacity-25 p-4 shadow transition-transform hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="absolute -ml-10 h-24 w-24 text-brand-dark opacity-25 transition-opacity group-hover:opacity-75" />
      <p className="ml-20 text-lg font-semibold">{title}</p>
    </a>
  )
}
