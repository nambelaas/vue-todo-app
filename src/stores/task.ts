import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [{
            id: 1,
            name: 'First Task',
            is_completed: true
        }, {
            id: 2,
            name: 'Second Task',
            is_completed: false
        }],
        task: {
            id: 1,
            name: 'First Task',
            is_completed: true
        }
    }),
    getters: {
        completedTasks: (state) => state.tasks.filter(task => task.is_completed),
        uncompletedTasks(state) {
            return state.tasks.filter(task => !task.is_completed)
        }
    }
})