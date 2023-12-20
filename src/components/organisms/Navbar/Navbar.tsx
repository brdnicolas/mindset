import Avatar from '@/components/atoms/Avatar'
import student from '@/assets/student.svg'

type AvatarProps = {
  studentName: string
  applicationNumber: number
}

export default function Navbar({ studentName, applicationNumber }: AvatarProps) {
  return (
    <div className="pt-5 pl-5 pb-5">
      <div className="w-[242px] h-full bg-[#131313] rounded-2xl p-6 flex flex-row justify-between items-start">
        <div>
          <h1 className="text-[#B6B6B8] text-2xl font-extrabold uppercase mb-9">Mindset</h1>
          <div className="flex items-center">
            <Avatar width={52} height={52} src={student} alt="student" />
            <div className="ml-5">
              <p className="text-[#5A595C] text-xs font-medium">{studentName}</p>
              <p className="text-[#5A595C] text-xs font-medium">
                {applicationNumber} {applicationNumber >= 0 && applicationNumber <= 1 ? 'candidature' : 'candidatures'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
