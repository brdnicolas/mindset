import { Reducer } from 'react'
import { ApplicationsActions, EApplicationsActions } from '@/contexts/applications/applications.actions'
import { ApplicationsState } from '@/contexts/applications/applications.types'

const card1 = {
  id: 'card-1',
  job: 'Software Engineer',
  imageUrl: 'https://picsum.photos/200/300',
  company: 'Google',
  date: '2021-09-01'
}

const card2 = {
  id: 'card-2',
  job: 'Software Engineer',
  imageUrl: 'https://picsum.photos/200/300',
  company: 'Facebook',
  date: '2021-09-01'
}

const card3 = {
  id: 'card-3',
  job: 'Software Engineer',
  imageUrl: 'https://picsum.photos/200/300',
  company: 'Amazon',
  date: '2021-09-01'
}

const card4 = {
  id: 'card-4',
  job: 'Software Engineer',
  imageUrl: 'https://picsum.photos/200/300',
  company: 'Amazon',
  date: '2021-09-01'
}

const card5 = {
  id: 'card-5',
  job: 'Software Engineer',
  imageUrl: 'https://picsum.photos/200/300',
  company: 'Amazon',
  date: '2021-09-01'
}

export const initialState: ApplicationsState = {
  applied: [card1, card2, card3, card4, card5],
  relaunched: [],
  interviewObtained: [],
  archived: []
}

export const applicationsReducer: Reducer<ApplicationsState, ApplicationsActions> = (state = initialState, action) => {
  switch (action.type) {
    case EApplicationsActions.SET_APPLICATIONS:
      if (action.payload.target) {
        return {
          ...state,
          [action.payload.target]: action.payload.applications
        }
      } else {
        return {
          ...state,
          ...action.payload
        }
      }
    default:
      return { ...state }
  }
}
