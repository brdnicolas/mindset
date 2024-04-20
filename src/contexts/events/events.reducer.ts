import { Reducer } from 'react'
import { EventState } from './events.types'
import { EEvents, EventsActions } from './events.actions'

export const initialState: EventState = {
  title: '',
  startDate: '',
  endDate: ''
}

export const eventsReducer: Reducer<EventState, EventsActions> = (state = initialState, action) => {
  switch (action.type) {
    case EEvents.SET_EVENTS:
      return { ...state, ...action.payload }
    case EEvents.ADD_EVENT:
      return {
        ...state,
        events: [action.payload.event]
      }
    default:
      return { ...state }
  }
}
