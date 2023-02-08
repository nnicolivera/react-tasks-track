import axios from 'axios'
const baseUrl = 'http://localhost:3001/tasks'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const get = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    const response = await request
    return response.data
}

const add = async newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = await request
    return response.data
}

const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request
    return response.data
}

const remove = async (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    const response = await request
    return response.data
}

const exportedObj = { getAll, get, add, update, remove }
export default exportedObj