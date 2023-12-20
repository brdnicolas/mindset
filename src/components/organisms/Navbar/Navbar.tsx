'use client'
import Avatar from '@/components/molecules/Avatar/Avatar'
import student from '@/assets/student.svg'
import NavbarLabel from '@/components/molecules/NavbarLabel/NavbarLabel'
import { BarChart2Icon, CreditCardIcon, DocumentIcon, GearIcon } from '@/components/atoms'

type AvatarProps = {
  studentName: string
  applicationNumber: number
}

export default function Navbar({ studentName, applicationNumber }: AvatarProps) {
  return (
    <div className="pt-5 pl-5 pb-5">
      <div className="w-[242px] h-full bg-[#131313] rounded-2xl p-6 flex flex-col justify-between items-start">
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
          <div className="mt-9">
            <NavbarLabel
              active={window.location.href.split('/')[3] === ''}
              onClick={() => {
                window.location.href = '/'
              }}
              label="Mes candidatures"
              icon={
                <DocumentIcon
                  className={`${window.location.href.split('/')[3] === '' ? 'text-[#B6B6B8]' : 'text-[#5A595C]'}`}
                />
              }
            />
            <NavbarLabel
              className="mt-5"
              active={window.location.href.split('/')[3] === 'stats'}
              onClick={() => {
                window.location.href = '/stats'
              }}
              label="Statistiques"
              icon={
                <BarChart2Icon
                  className={`${window.location.href.split('/')[3] === 'stats' ? 'text-[#B6B6B8]' : 'text-[#5A595C]'}`}
                />
              }
            />
          </div>
        </div>
        <div className="w-full">
          <hr className="h-[1px] w-full text-red-600" />
          <div className="mt-5">
            <NavbarLabel
              active={window.location.href.split('/')[3] === 'settings'}
              onClick={() => {
                window.location.href = '/settings'
              }}
              label="Reglages"
              icon={
                <GearIcon
                  className={`${
                    window.location.href.split('/')[3] === 'settings' ? 'text-[#B6B6B8]' : 'text-[#5A595C]'
                  }`}
                />
              }
            />
            <NavbarLabel
              active={window.location.href.split('/')[3] === 'plans'}
              onClick={() => {
                window.location.href = '/plans'
              }}
              label="Plans"
              className="mt-5"
              icon={
                <CreditCardIcon
                  className={`${window.location.href.split('/')[3] === 'plans' ? 'text-[#B6B6B8]' : 'text-[#5A595C]'}`}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
