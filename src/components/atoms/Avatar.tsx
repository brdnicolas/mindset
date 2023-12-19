import Image from 'next/image'

type AvatarProps = {
  src?: string
  alt?: string
  width: number
  height: number
}

export default function Avatar({ src, alt, width, height }: AvatarProps) {
  return (
    <div>
      {src && alt ? (
        <Image width={width} height={height} src={src} alt={alt} className="rounded-full" />
      ) : (
        <div className="bg-slate-600 rounded-full w-8 h-8"></div>
      )}
    </div>
  )
}
