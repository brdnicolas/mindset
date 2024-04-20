export type EventState = {
  title: string
  startDate: string
  endDate: string
  applicationId?: number
}

export type EventsState = {
  events: EventState[]
}
