import { Input } from '@/components'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { updateApplicationById } from '@/services/applications/application'
import clsx from 'clsx'
import { ReactEventHandler, useEffect, useState } from 'react'

export const General = () => {
  const { id, job, jobOfferUrl, company } = useApplicationDetailsContext()

  const [currentCompany, setCurrentCompany] = useState(company)
  const [currentJob, setCurrentJob] = useState(job)
  const [currentJobOfferUrl, setCurrentJobOfferUrl] = useState(jobOfferUrl)

  useEffect(() => {
    if (currentCompany !== company || currentJob !== job || currentJobOfferUrl !== jobOfferUrl) {
      const delayDebounceFn = setTimeout(() => {
        updateApplicationById(id, {
          company: currentCompany,
          job: currentJob,
          jobOfferUrl: currentJobOfferUrl
        })
      }, 1000)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [currentCompany, currentJob, currentJobOfferUrl])

  return (
    <div className={clsx('w-1/2', 'mobile:w-full')}>
      <p className="text-4 text-gray-50 font-bold mb-6">Général</p>
      <div className="flex items-center gap-10">
        <Input
          className="w-full"
          iconName="company"
          label="Entreprise"
          value={currentCompany}
          onChange={(e) => setCurrentCompany(e.target.value)}
        />
        <Input
          className="w-full"
          iconName="briefcase"
          label="Poste"
          value={currentJob}
          onChange={(e) => setCurrentJob(e.target.value)}
        />
      </div>
      <Input
        className="w-full mt-6"
        iconName="link"
        label="Lien de l'offre"
        value={currentJobOfferUrl}
        onChange={(e) => setCurrentJobOfferUrl(e.target.value)}
      />
    </div>
  )
}
