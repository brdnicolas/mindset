import { CalendarIcon, DocumentTextIcon } from '@/components/atoms'
import Avatar from '@/components/molecules/Avatar/Avatar'

type CardProps = {
  company: string
  job: string
  date: string
}

export default function Card({ company, job, date }: CardProps) {
  return (
    <div className="p-5 bg-[#141414] rounded-2xl min-w-[308px]">
      <div className="flex items-center">
        <Avatar width={32} height={32} />
        <p className="ml-3 text-[#9E9DA0] text-sm">{company}</p>
      </div>
      <p className="mt-5 text-[#D6D6D6] text-base font-bold">{job}</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center ">
          <CalendarIcon className="w-5 h-5 text-[#5A595C]" />
          <p className="text-[14px] text-[#5A595C] ml-[8px]">{date}</p>
        </div>
        <DocumentTextIcon className="w-5 h-5 text-[#5A595C]" />
      </div>
    </div>
  )
}
