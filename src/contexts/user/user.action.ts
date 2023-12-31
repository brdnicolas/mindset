export enum EUserActions {
  GET_USER_DATA = 'GET_USER_DATA'
}

type GetUserData = {
  type: EUserActions.GET_USER_DATA
  payload: {
    data: { id: number; email: string; firstName: string; lastName: string; applicationsNumber: number }
  }
}

export const getUserData = (args: {
  data: { id: number; email: string; firstName: string; lastName: string; applicationsNumber: number }
}): GetUserData => ({
  type: EUserActions.GET_USER_DATA,
  payload: args
})
