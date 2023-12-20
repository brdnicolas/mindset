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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 8.25H12" stroke="#5A595C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M2.25 7.35C2.25 6.08988 2.25 5.45982 2.49524 4.97852C2.71095 4.55516 3.05516 4.21095 3.47852 3.99524C3.95982 3.75 4.58988 3.75 5.85 3.75H12.15C13.4102 3.75 14.0401 3.75 14.5215 3.99524C14.9449 4.21095 15.2891 4.55516 15.5048 4.97852C15.75 5.45982 15.75 6.08988 15.75 7.35V12.15C15.75 13.4102 15.75 14.0401 15.5048 14.5215C15.2891 14.9449 14.9449 15.2891 14.5215 15.5048C14.0401 15.75 13.4102 15.75 12.15 15.75H5.85C4.58988 15.75 3.95982 15.75 3.47852 15.5048C3.05516 15.2891 2.71095 14.9449 2.49524 14.5215C2.25 14.0401 2.25 13.4102 2.25 12.15V7.35Z"
              stroke="#5A595C"
              stroke-width="1.5"
            />
            <path
              d="M6.75 5.25V2.25"
              stroke="#5A595C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 5.25V2.25"
              stroke="#5A595C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[14px] text-[#5A595C] ml-[8px]">{date}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
          <g clip-path="url(#clip0_2_548)">
            <path
              d="M4.35 14.75H7.65C8.91015 14.75 9.54015 14.75 10.0215 14.5048C10.4449 14.2891 10.7891 13.9449 11.0048 13.5215C11.25 13.0401 11.25 12.4102 11.25 11.15V7.24115C11.25 6.69088 11.25 6.41568 11.1878 6.15673C11.1327 5.92715 11.0418 5.70767 10.9184 5.50636C10.7793 5.2793 10.5848 5.08472 10.1956 4.69558L7.80443 2.30442C7.41525 1.91527 7.2207 1.7207 6.99367 1.58156C6.7923 1.45819 6.57285 1.36729 6.34327 1.31217C6.0843 1.25 5.80912 1.25 5.25885 1.25H4.35C3.08988 1.25 2.45982 1.25 1.97852 1.49524C1.55516 1.71095 1.21095 2.05516 0.995235 2.47852C0.75 2.95982 0.75 3.58988 0.75 4.85V11.15C0.75 12.4102 0.75 13.0401 0.995235 13.5215C1.21095 13.9449 1.55516 14.2891 1.97852 14.5048C2.45982 14.75 3.08988 14.75 4.35 14.75Z"
              stroke="#5A595C"
              stroke-width="1.5"
            />
            <path d="M3 7.25H9" stroke="#5A595C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 9.5H9" stroke="#5A595C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 11.75H7.5" stroke="#5A595C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_2_548">
              <rect width="12" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}
