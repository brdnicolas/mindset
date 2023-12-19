import Avatar from '@/components/atoms/Avatar'
import placeholder from '@/assets/placeholder.svg'

type CardProps = {
  companyName: string
  jobName: string
}

export default function Card({ companyName, jobName }: CardProps) {
  return (
    <div className="p-[21px] bg-[#141414] rounded-[14px]">
      <div className="flex items-center">
        <Avatar src={placeholder} imgName="placeholder" width={32} height={32} />
        <p className="ml-[12px] text-[#9E9DA0] text-[14px]">{companyName}</p>
      </div>
      <p className="mt-[21px] text-[#D6D6D6] text-[16px] font-bold">{jobName}</p>
      <div></div>
    </div>
  )
}
