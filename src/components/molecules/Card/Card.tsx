import Avatar from '@/components/atoms/Avatar'

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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 11H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M3 9.8C3 8.11984 3 7.27976 3.32698 6.63803C3.6146 6.07354 4.07354 5.6146 4.63803 5.32698C5.27976 5 6.11984 5 7.8 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V9.8Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path d="M9 7V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 7V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className="text-[14px] text-[#5A595C] ml-[8px]">{date}</p>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V10.9882C19 10.2545 19 9.88757 18.9171 9.5423C18.8436 9.2362 18.7224 8.94356 18.5579 8.67515C18.3724 8.3724 18.113 8.11296 17.5941 7.59411L14.4059 4.40589C13.887 3.88703 13.6276 3.6276 13.3249 3.44208C13.0564 3.27759 12.7638 3.15638 12.4577 3.08289C12.1124 3 11.7455 3 11.0118 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path d="M8 11H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 14H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 17H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}
