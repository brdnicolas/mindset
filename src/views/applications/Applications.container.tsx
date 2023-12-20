import { useMemo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { setApplications } from '@/contexts/applications/applications.actions'
import { Column } from '@/views/applications/components/Column'
import { ApplicationStatus } from '@/contexts/applications/applications.types'

export const ApplicationsContainer = () => {
  const { applied, relaunched, interviewObtained, dispatch } = useApplicationsContext()
  const columns = useMemo(
    () => ({
      applied: {
        id: 'applied',
        cards: applied
      },
      relaunched: {
        id: 'relaunched',
        cards: relaunched
      },
      interviewObtained: {
        id: 'interviewObtained',
        cards: interviewObtained
      }
    }),
    [applied, relaunched, interviewObtained]
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
      <div className="flex h-full">
        {Object.values(columns).map((column) => (
          <Column key={column.id} cards={column.cards} id={column.id} />
        ))}
      </div>
    </DragDropContext>
  )
}
