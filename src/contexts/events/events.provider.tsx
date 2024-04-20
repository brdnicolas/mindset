import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer, useEffect } from 'react'
import { EventState } from './events.types'
import { EventsActions, setEvents } from './events.actions'
import { eventsReducer, initialState } from './events.reducer'
import { getAllEvents } from '@/services/events/events'

type EventsContext = EventState & {
  dispatch: Dispatch<EventsActions>
}

const eventsContext = createContext<EventsContext>({
  ...initialState,
  dispatch: () => {}
})

export const useEventsContext = () => useContext(eventsContext)

type EventsProviderPropsType = {
  children: ReactNode
}

export const EventProvider = ({ children }: EventsProviderPropsType) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      return
    }

    getAllEvents().then((data) => dispatch(setEvents(data)))
  }, [])

  const value: EventsContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <eventsContext.Provider value={value}>{children}</eventsContext.Provider>
}
