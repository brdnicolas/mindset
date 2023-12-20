type NavbarLabelProps = {
  icon: any
  label: string
  onClick: () => void
  active: boolean
  className?: string
}

export default function NavbarLabel({ icon, label, onClick, active, className }: NavbarLabelProps) {
  return (
    <div className={`flex items-center cursor-pointer ${className}`} onClick={onClick}>
      {icon}
      <p className={`ml-2 ${active ? ' text-[#B6B6B8]' : 'text-[#5A595C]'} text-base font-medium`}>{label}</p>
    </div>
  )
}
