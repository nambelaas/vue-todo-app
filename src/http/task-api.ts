import api from "./api";

interface Task {
    id: number
    name: string
}

const resource = "/tasks"

export const allTasks = () => api.get(resource)

export const createTask = (task: Object) => api.post(resource, task)

export const updateTask = (id: number, task: Task) => api.put(`${resource}/${id}`, task)

export const removeTask = (id: number) => api.delete(`${resource}/${id}`)

export const completeTask = (id: number, task: Task) => api.put(`${resource}/${id}/complete`, task)