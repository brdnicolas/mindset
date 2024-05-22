import { Reducer } from 'react'
import { EventsState } from './events.types'
import { EEvents, EventsActions } from './events.actions'

export const initialState: EventsState = {
  events: []
}

export const eventsReducer: Reducer<EventsState, EventsActions> = (state = initialState, action) => {
  switch (action.type) {
    case EEvents.SET_EVENTS:
      return { ...state, ...action.payload }
    case EEvents.ADD_EVENT:
      return {
        ...state,
        events: [action.payload.event, ...state.events]
      }
    default:
      return { ...state }
  }
}
