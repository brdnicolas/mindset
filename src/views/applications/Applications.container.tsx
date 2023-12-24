import { useMemo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { setApplications } from '@/contexts/applications/applications.actions'
import { Column } from '@/views/applications/components/Column'
import { ApplicationStatus } from '@/contexts/applications/applications.types'
import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'

export const ApplicationsContainer = withGlobalLayout(() => {
  const { applied, relaunched, interviewObtained, archived, dispatch } = useApplicationsContext()
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

    const start = columns[source.droppableId as ApplicationStatus]
    const end = columns[destination.droppableId as ApplicationStatus]
    const isInTheSameColumn = start === end

    if (isInTheSameColumn) {
      const newList = start.cards.filter((_: any, index: number) => index !== source.index)

      newList.splice(destination.index, 0, start.cards[source.index])

      const newCol = {
        id: start.id,
        cards: newList
      }

      dispatch(setApplications({ target: newCol.id as ApplicationStatus, applications: newCol.cards }))
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

      dispatch(setApplications({ target: newStartCol.id as ApplicationStatus, applications: newStartCol.cards }))
      dispatch(setApplications({ target: newEndCol.id as ApplicationStatus, applications: newEndCol.cards }))
      return null
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="pt-6 flex flex-col h-full">
        <div className="flex items-center">
          <Icon className="w-7 h-7 text-gray-200" name="document" />
          <p className="text-gray-200 text-2xl font-extrabold ml-3">Mes candidatures</p>
        </div>
        <div className="flex gap-12 h-full w-full overflow-hidden overflow-x-auto pt-12 pr-9">
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
    </DragDropContext>
  )
})
