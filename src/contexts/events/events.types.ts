export type EventState = {
  name: string
  start: string
  end: string
  applicationId?: number
}

export type EventsState = {
  events: EventState[]
}
