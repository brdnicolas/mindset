import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import './EventContainer.scss'
import { useEffect, useState } from 'react'
import { AddEventModal } from '@/views/applicationDetails/containers/events/components/addEventModal'
import { AddCardEvent } from './components/addCardEvent'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { getEventByApplicationId } from '@/services/events/events'
import { EventSourceInput } from '@fullcalendar/core'

export const EventContainer = () => {
  const [showNewEvent, setShowNewEvent] = useState(false)
  const [events, setEvents] = useState<EventSourceInput>()
  const { id } = useApplicationDetailsContext()

  useEffect(() => {
    getEventByApplicationId(id).then((data) => {
      return setEvents(data)
    })
  }, [id])

  return (
    <div className="mt-12 mb-10">
      <p className="font-bold text-4 text-gray-50 mb-6">Évévenment à venir</p>
      <div className="grid grid-cols-4 mb-13">
        <AddCardEvent
          onClick={() => {
            setShowNewEvent(!showNewEvent)
          }}
        />
      </div>
      <p className="font-bold text-4 text-gray-50 mb-6">Évévenment à venir</p>
      <FullCalendar
        events={events}
        navLinks
        eventColor="#D6D6D6"
        eventTextColor="#090909"
        eventClassNames="event-container"
        eventClick={(info) => {
          console.log(info.event.title, info.event.startStr)
        }}
        unselectAuto
        firstDay={1}
        dayHeaderFormat={{ weekday: 'long' }}
        buttonText={{ today: "Aujourd'hui", month: 'Mois', year: 'Année', week: 'Semaine', day: 'Jour' }}
        headerToolbar={{ start: 'prev,next', center: 'title', end: 'timeGridDay,dayGridMonth,dayGridYear' }}
        locale={'fr'}
        plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
      />
      {showNewEvent && <AddEventModal show={showNewEvent} onClose={() => setShowNewEvent(!showNewEvent)} />}
    </div>
  )
}
