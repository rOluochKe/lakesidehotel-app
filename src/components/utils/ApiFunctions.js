import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:9192'
})

export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData()
  formData.append('photo', photo)
  formData.append('roomType', roomType)
  formData.append('roomPrice', roomPrice)

  const response = await api.post('/rooms/add/new-room', formData)
  if (response.status === 200) {
    return true
  } else {
    return false
  }
}

export async function getRoomTypes() {
  try {
    const response = await api.get('/rooms/room/types')
    return response.data
  } catch (error) {
    throw new Error('Error retrieving room types')
  }
}

export async function getAllRooms() {
  try {
    const result = await api.get('/rooms/all-rooms')
    return result.data
  } catch (error) {
    throw new Error('Error retrieving all rooms')
  }
}

export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`/rooms/delete/room/${roomId}`)
    return result.data
  } catch (error) {
    throw new Error(`Error deleting room ${error.message}`)
  }
}

export async function updateRoom(roomId, roomData) {
  const formData = new FormData()
  formData.append('roomType', roomData.roomType)
  formData.append('roomPrice', roomData.roomPrice)
  formData.append('photo', roomData.photo)

  const response = await api.put(`/rooms/update/${roomId}`)
  return response
}

export async function getRoomById(roomId) {
  try {
    const result = await api.get(`/rooms/room/${roomId}`)
    return result.data
  } catch (error) {
    throw new Error(`Error getting room ${error.message}`)
  }
}