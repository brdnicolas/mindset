import { EventsState, EventState } from '@/contexts/events/events.types'
import { api } from '../api'

export const getEventByApplicationId = (applicationId: number): Promise<[]> => {
  return api.get(`/events/application/${applicationId}`).then((response) => response.data)
}

export const getAllEvents = (): Promise<EventsState> => {
  return api.get('/events').then((response) => response.data)
}
export const createEvent = (applicationId: number, name: string, start: string, end: string): Promise<EventState> => {
  return api.post('/events', { applicationId, name, start, end }).then((response) => response.data)
}
