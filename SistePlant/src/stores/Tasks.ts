import { defineStore } from 'pinia'
import axios from "axios"


export const tasksStore = defineStore({
    id: 'task',
    state: () => ({
        list: [{ _id: '0', name: '', active: false, visible : false }
        ],
        activeFilter : 'all'
    }),
    actions: {
        async fetchTasks() {
            try {
                const response = await axios.get('http://localhost:3000/api/tasks')
                this.list = response.data
                this.changeFilter('all')
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async addTaskToList(newTask: string) {
            try {
                const response = await axios.post('http://localhost:3000/api/tasks', { name: newTask, active: true, visible: true })
                this.list.push(response.data);
                this.changeFilter('all')
            }
            catch (error) {
                console.log(error)
            }
        }, 
        async updateTaskStatus(taskIndex: number) {
            try {
                if (this.list[taskIndex]._id) {
                    const response = await axios.put('http://localhost:3000/api/tasks/' + this.list[taskIndex]._id, { active: !this.list[taskIndex].active, visible: true })
                    this.list[taskIndex].active = response.data.active
                    this.changeFilter(this.activeFilter)
                }
            }
            catch (error) {
                console.log(error)
            }
       },
       async deleteTask(taskIndex: number) {
           try {
               if (this.list[taskIndex]._id) {
                   const response = await axios.delete('http://localhost:3000/api/tasks/' + this.list[taskIndex]._id)
                   this.list.splice(taskIndex, 1); 
               }

            }
            catch (error) {
                console.log(error)
            }
       },
       changeFilter(filter: string) {
           for (const listElm of this.list) {
               if (filter === 'all') {
                   listElm.visible = true
               }
               if (filter === 'actives') {
                   listElm.visible = listElm.active ? listElm.visible = true : listElm.visible = false
               }
               if (filter === 'unactives') {
                   listElm.visible = !listElm.active ? listElm.visible = true : listElm.visible = false
               }
           }
           this.activeFilter = filter
       },
   },

})