import { useMemo, useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { addApplication, setApplications } from '@/contexts/applications/applications.actions'
import { Column } from '@/views/applications/components/Column'
import { ApplicationStates } from '@/contexts/applications/applications.types'
import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import { createApplication, updateApplicationStateById } from '@/services/applications/application'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'
import { useBreakpointsContext } from '@/contexts/breakpoints/breakpoints.provider'
import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { DatePickerInput } from '@/components/atoms/datePickerInput/DatePickerInput'
import { Modal } from '@/components/organisms/modal/Modal'
import dayjs from 'dayjs'

export const ApplicationsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    const { applied, relaunched, interviewObtained, archived, dispatch } = useApplicationsContext()
    const { isMobile, isTablet } = useBreakpointsContext()
    const isMobileOrTablet = isMobile || isTablet

    const [showNewApplication, setShowNewApplication] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [jobOfferUrl, setJobOfferUrl] = useState('')
    const [job, setJob] = useState('')
    const [company, setCompany] = useState('')
    const [applicationDate, setApplicationDate] = useState('')

    const columns = useMemo(
      () => ({
        applied: {
          title: 'Postulée',
          cards: applied,
          icon: 'folder-add',
          color: 'applied',
          id: 'applied'
        },
        relaunched: {
          title: 'Relancée',
          cards: relaunched,
          icon: 'mail',
          color: 'relaunched',
          id: 'relaunched'
        },
        interviewObtained: {
          title: 'Entretien',
          cards: interviewObtained,
          icon: 'check',
          color: 'interviewObtained',
          id: 'interviewObtained'
        },
        archived: {
          title: 'Archivée',
          cards: archived,
          icon: 'archive',
          color: 'archived',
          id: 'archived'
        }
      }),
      [applied, relaunched, interviewObtained, archived]
    )

    const handleOnAdd = () => {
      const formatedDate = dayjs(applicationDate).format('YYYY-MM-DD')
      const application = { job, jobOfferUrl, company, applicationDate: formatedDate }
      createApplication(application)
      dispatch(addApplication({ application }))
      setShowNewApplication(!showNewApplication)
    }

    const onDragEnd = ({ source, destination }: DropResult) => {
      const destinationNotFound = destination === undefined || destination === null

      if (destinationNotFound) {
        return null
      }

      const sourceAndDestinationAreTheSame =
        source.droppableId === destination.droppableId && destination.index === source.index

      if (sourceAndDestinationAreTheSame) {
        return null
      }

      const start = columns[source.droppableId as ApplicationStates]
      const end = columns[destination.droppableId as ApplicationStates]
      const isInTheSameColumn = start === end

      if (isInTheSameColumn) {
        const newList = start.cards.filter((_: any, index: number) => index !== source.index)

        newList.splice(destination.index, 0, start.cards[source.index])

        const newCol = {
          id: start.id,
          cards: newList
        }

        updateApplicationStateById(Number(start.cards[source.index].id), newCol.id as ApplicationStates)
        dispatch(setApplications({ target: newCol.id as ApplicationStates, applications: newCol.cards }))

        return null
      } else {
        const newStartList = start.cards.filter((_: any, idx: number) => idx !== source.index)

        const newStartCol = {
          id: start.id,
          cards: newStartList
        }

        const newEndList = end.cards

        newEndList.splice(destination.index, 0, start.cards[source.index])

        const newEndCol = {
          id: end.id,
          cards: newEndList
        }

        updateApplicationStateById(Number(start.cards[source.index].id), newEndCol.id as ApplicationStates)
        dispatch(setApplications({ target: newStartCol.id as ApplicationStates, applications: newStartCol.cards }))
        dispatch(setApplications({ target: newEndCol.id as ApplicationStates, applications: newEndCol.cards }))
        return null
      }
    }

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="laptop:pt-6 flex flex-col h-full">
          {!isMobileOrTablet && (
            <div className="flex items-center justify-between pr-9">
              <div className="flex items-center">
                <Icon className="w-7 h-7 text-gray-200" name="document" />
                <p className="text-gray-200 text-2xl font-extrabold ml-3">Mes candidatures</p>
              </div>
              <ButtonPrimary onClick={() => setShowNewApplication(true)}>Nouvelle candidature</ButtonPrimary>
            </div>
          )}
          {isMobileOrTablet && (
            <div className=" w-full flex justify-center">
              <ButtonPrimary onClick={() => setShowNewApplication(true)}>Nouvelle candidature</ButtonPrimary>
            </div>
          )}
          <div className="flex gap-12 h-full w-full overflow-hidden overflow-x-auto pt-5 pl-5 laptop:pl-0 laptop:pt-12 pr-9">
            <Column
              title={columns.applied.title}
              icon={columns.applied.icon as IconName}
              color={columns.applied.color}
              key={columns.applied.id}
              cards={columns.applied.cards}
              id={columns.applied.id}
            />
            <Column
              title={columns.relaunched.title}
              icon={columns.relaunched.icon as IconName}
              color={columns.relaunched.color}
              key={columns.relaunched.id}
              cards={columns.relaunched.cards}
              id={columns.relaunched.id}
            />
            <Column
              title={columns.interviewObtained.title}
              icon={columns.interviewObtained.icon as IconName}
              color={columns.interviewObtained.color}
              key={columns.interviewObtained.id}
              cards={columns.interviewObtained.cards}
              id={columns.interviewObtained.id}
            />
            <Column
              title={columns.archived.title}
              icon={columns.archived.icon as IconName}
              color={columns.archived.color}
              key={columns.archived.id}
              cards={columns.archived.cards}
              id={columns.archived.id}
            />
          </div>
        </div>
        <Modal
          title="Ajouter une candidature"
          show={showNewApplication}
          onClose={() => setShowNewApplication(!showNewApplication)}
        >
          <div className="mt-6">
            <Input
              type="string"
              name="offerLink"
              label="Lien de l'offre"
              iconName="link"
              handleOnChange={(e) => setJobOfferUrl(e.target.value)}
              value={jobOfferUrl}
            />
            <hr className="h-[1px] border-gray-600 w-full mt-8" />
            <div className="flex items-center justify-between mt-8">
              <Input
                className="w-full"
                type="string"
                iconName="briefcase"
                name="job"
                label="Poste"
                value={job}
                handleOnChange={(e) => setJob(e.target.value)}
              />
              <Input
                className="w-full ml-4"
                type="string"
                iconName="briefcase"
                name="company"
                label="Entreprise"
                value={company}
                handleOnChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <DatePickerInput
              onClick={() => setShowDatePicker(!showDatePicker)}
              value={applicationDate}
              show={showDatePicker}
              onChange={(e: any) => {
                setShowDatePicker(!showDatePicker)
                setApplicationDate(e)
              }}
              className="mt-3"
              label="Date de candidature"
            />
          </div>
          <footer className="flex items-center justify-center mt-6">
            <ButtonSecondary onClick={() => setShowNewApplication(!showNewApplication)}>Annuler</ButtonSecondary>
            <ButtonPrimary className="ml-4" onClick={handleOnAdd}>
              Confirmer
            </ButtonPrimary>
          </footer>
        </Modal>
      </DragDropContext>
    )
  })
)
