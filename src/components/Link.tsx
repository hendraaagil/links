import type { IconType } from 'react-icons'
import clsx from 'clsx'

export type LinkProps = {
  Icon: IconType
  link: string
  title: string
}

export const Link = ({ Icon, link, title }: LinkProps) => (
  <a
    href={link}
    className={clsx(
      'group relative flex w-full items-center',
      'overflow-hidden rounded-md bg-brand-light bg-opacity-25 p-4 shadow',
      'transition-transform hover:-translate-y-1'
    )}
    target="_blank"
    rel="noopener noreferrer"
    data-umami-event={`${title} Button`}
  >
    <Icon
      className={clsx(
        'absolute -ml-10 mt-6 h-24 w-24 text-brand-primary',
        'opacity-25 transition-opacity group-hover:opacity-80'
      )}
    />
    <p
      className={clsx(
        'ml-20 text-base font-semibold',
        'group-hover:text-brand-primary group-hover:underline'
      )}
    >
      {title}
    </p>
  </a>
)
