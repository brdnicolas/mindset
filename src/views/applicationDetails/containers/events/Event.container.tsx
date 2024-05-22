import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import './EventContainer.scss'
import { useEffect, useState } from 'react'
import { AddEventModal } from '@/views/applicationDetails/containers/events/components/addEventModal'
import { AddCardEvent } from './components/addCardEvent'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { getEventByApplicationId } from '@/services/events/events'
import { CardEvent } from './components/cardEvent'
import clsx from 'clsx'
import { useEventsContext } from '@/contexts/events/events.provider'

export const EventContainer = () => {
  const [showNewEvent, setShowNewEvent] = useState(false)

  const { events } = useEventsContext()

  return (
    <div className="mt-12 mb-10">
      <p className="font-bold text-4 text-gray-50 mb-6">Évévenments à venir</p>
      <div className="flex mb-13 overflow-scroll">
        {events && events.length > 0 ? (
          <>
            {events.map((event) => {
              return <CardEvent className="mr-6" eventTitle={event.name} eventDate={event.start} />
            })}
            <AddCardEvent
              onClick={() => {
                setShowNewEvent(!showNewEvent)
              }}
            />
          </>
        ) : (
          <div
            onClick={() => {
              setShowNewEvent(true)
            }}
          >
            <p className={clsx('cursor-pointer text-gray-500 text-4', 'hover:underline')}>
              Aucun événement de prévu. Clique ici pour ajouter un nouvel événement.
            </p>
          </div>
        )}
      </div>
      <p className="font-bold text-4 text-gray-50 mb-6">Évévenments à venir</p>
      <FullCalendar
        displayEventTime={false}
        events={events?.map((event) => {
          return {
            title: event.name || 'Évévenment',
            start: event.start,
            end: event.end
          }
        })}
        navLinks
        eventColor="#D6D6D6"
        eventTextColor="#090909"
        eventClassNames="event-container"
        eventClick={(info) => {}}
        unselectAuto
        firstDay={1}
        dayHeaderFormat={{ weekday: 'long' }}
        buttonText={{ today: "Aujourd'hui", month: 'Mois', year: 'Année', week: 'Semaine', day: 'Jour', list: 'Liste' }}
        headerToolbar={{ start: 'prev,next', center: 'title', end: 'dayGridMonth,dayGridWeek,dayGridDay,listMonth' }}
        locale={'fr'}
        plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
      />
      {showNewEvent && <AddEventModal show={showNewEvent} onClose={() => setShowNewEvent(!showNewEvent)} />}
    </div>
  )
}
