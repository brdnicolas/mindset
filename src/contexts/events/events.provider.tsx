import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer, useEffect } from 'react'
import { EventsState } from './events.types'
import { EventsActions, setEvents } from './events.actions'
import { eventsReducer, initialState } from './events.reducer'
import { getEventByApplicationId } from '@/services/events/events'
import { useApplicationDetailsContext } from '../applicationDetails/applicationDetails.provider'

type EventsContext = EventsState & {
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
  const { id } = useApplicationDetailsContext()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      return
    }

    console.log(id)

    getEventByApplicationId(id)
      .then((data) => {
        console.log(data)
        dispatch(setEvents({ events: data }))
      })
      .catch(() => {
        localStorage.removeItem('token')
        window.location.reload()
      })
  }, [id])

  const value: EventsContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <eventsContext.Provider value={value}>{children}</eventsContext.Provider>
}
