import { useState } from 'react'
import { DropResult, DragDropContext } from 'react-beautiful-dnd'
import { Column } from '@/containers/applications/components/Column'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { setApplications } from '@/contexts/applications/applications.actions'

export const ApplicationsContainer = () => {
  const { applied, relaunched, interviewObtained, dispatch } = useApplicationsContext()
  const [columns, setColumns] = useState({
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
  })

  console.log(applied, 'applied')

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

    // Set start and end variables
    // @ts-ignore
    const start = columns[source.droppableId]
    // @ts-ignore
    const end = columns[destination.droppableId]
    const isInTheSameColumn = start === end

    if (isInTheSameColumn) {
      // Move the item within the cards
      // Start by making a new cards without the dragged item
      const newList = start.cards.filter((_: any, index: number) => index !== source.index)

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.cards[source.index])

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        cards: newList
      }

      // Update the state

      // setColumns((state) => ({ ...state, [newCol.id]: newCol }))

      dispatch(setApplications({ target: newCol.id, applications: newCol.cards }))
      return null
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start cards like before
      const newStartList = start.cards.filter((_: any, idx: number) => idx !== source.index)

      // Create a new start column
      const newStartCol = {
        id: start.id,
        cards: newStartList
      }

      // Make a new end cards array
      const newEndList = end.cards

      // Insert the item into the end cards
      newEndList.splice(destination.index, 0, start.cards[source.index])

      // Create a new end column
      const newEndCol = {
        id: end.id,
        cards: newEndList
      }

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }))
      return null
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        {Object.values(columns).map((column) => (
          <Column key={column.id} cards={column.cards} id={column.id} />
        ))}
      </div>
    </DragDropContext>
  )
}
