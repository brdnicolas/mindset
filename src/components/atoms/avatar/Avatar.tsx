import clsx from 'clsx'

type AvatarProps = {
  src?: string
  alt?: string
  className?: string
}

export const Avatar = ({ src, alt, className = '' }: AvatarProps) => {
  return (
    <div className={clsx('rounded-full aspect-square overflow-hidden', className)}>
      {src ? <img className="h-full w-full" src={src} alt={alt} /> : <div className="bg-slate-600 rounded-full"></div>}
    </div>
  )
}
