import api from './api'

export const GetHotelBranches = async () => {
  try {
    const res = await api.get('/hotelbranches')
    return res.data
  } catch (error) {
    console.error('Error fetching hotel branches:', error)
    throw error
  }
}
