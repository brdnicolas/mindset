import Image from 'next/image'

type AvatarProps = {
  src: string
  alt: string
  width: number
  height: number
}

export default function Avatar({ src, alt, width, height }: AvatarProps) {
  return (
    <div>
      <Image width={width} height={height} src={src} alt={alt} className="rounded-full" />
    </div>
  )
}
