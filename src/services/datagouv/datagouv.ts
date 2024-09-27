import axios from 'axios'

interface GouvLocation {
  geometry: {
    coordinates: number[]
  }
  properties: {
    label: string
  }
}

export const getAddressAutocompletion = async (address: string): Promise<GouvLocation[]> => {
  return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${address}`).then((response) => {
    return response.data.features
  })
}
