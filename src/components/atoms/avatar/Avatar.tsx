type AvatarProps = {
  src?: string
  alt?: string
  width: number
  height: number
}

export const Avatar = ({ src, alt, width, height }: AvatarProps) => {
  return (
    <div>
      {src ? (
        <img width={width} height={height} src={src} alt={alt} className="rounded-full aspect-square" />
      ) : (
        <div className="bg-slate-600 rounded-full w-8 h-8"></div>
      )}
    </div>
  )
}
