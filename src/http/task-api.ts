import api from "./api";

const resource = "/tasks"

export const allTasks = () => api.get(resource)

export const createTask = (task: Object) => api.post(resource, task)

export const updateTask = (id: number, task: Object) => api.put(`${resource}/${id}`, task)

export const removeTask = (id: number) => api.delete(`${resource}/${id}`)

export const completeTask = (id: number, task: Object) => api.patch(`${resource}/${id}/complete`, task)