import { allTasks } from "@/http/task-api";
import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: <Object[]>([]),
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
    },
    actions: {
        async fetchAllTasks() {
            const { data } = await allTasks()
            this.tasks = data.data
        }
    }
})