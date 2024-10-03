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
      'overflow-hidden p-4 border border-slate-800',
      'transition-[background-color,border-radius] duration-300 hover:rounded-lg hover:bg-slate-50 hover:bg-opacity-5'
    )}
    target="_blank"
    rel="noopener noreferrer"
    data-umami-event={`${title} Button`}
  >
    <Icon
      className={clsx(
        'absolute -ml-10 mt-4 h-24 w-24 text-blue-500',
        'opacity-25 transition-[opacity,transform] duration-300',
        'group-hover:opacity-100 group-hover:scale-[0.85]'
      )}
    />
    <p
      className={clsx(
        'ml-20 text-base font-semibold',
        'transition-colors duration-300',
        'group-hover:text-blue-500'
      )}
    >
      {title}
    </p>
  </a>
)
