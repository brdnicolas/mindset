import { EventsState, EventState } from '@/contexts/events/events.types'
import { api } from '../api'

export const getEventByApplicationId = (applicationId: number): Promise<[]> => {
  return api.get(`/events/application/${applicationId}`).then((response) => response.data)
}

export const getAllEvents = (): Promise<EventsState> => {
  return api.get('/events').then((response) => response.data)
}

export interface CreateEvent {
  applicationId: number
  name: string
  start: Date
  end: Date
}

export const createEvent = (events: CreateEvent): Promise<EventState> => {
  return api.post('/events', { ...events }).then((response) => response.data)
}
