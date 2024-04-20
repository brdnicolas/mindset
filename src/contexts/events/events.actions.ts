import { EventsState, EventState } from './events.types'

export enum EEvents {
  SET_EVENTS = 'SET_EVENTS',
  ADD_EVENT = 'ADD_EVENT'
}

export type SetEvents = {
  type: EEvents.SET_EVENTS
  payload: EventsState
}
export const setEvents = (args: { events: EventState[] }): SetEvents => ({
  type: EEvents.SET_EVENTS,
  payload: args
})

type AddEvent = {
  type: EEvents.ADD_EVENT
  payload: {
    event: EventState
  }
}

export const addEvent = (args: { event: EventState }): AddEvent => ({
  type: EEvents.ADD_EVENT,
  payload: args
})

export type EventsActions = SetEvents | AddEvent
