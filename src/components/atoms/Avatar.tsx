import Image from 'next/image'

type AvatarProps = {
  src: string
  imgName: string
  width: number
  height: number
}

export default function Avatar({ src, imgName, width, height }: AvatarProps) {
  return (
    <div className="w-fit">
      <Image width={width} height={height} src={src} alt={imgName} className="rounded-full" />
    </div>
  )
}
