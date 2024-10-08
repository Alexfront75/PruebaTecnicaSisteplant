<script setup lang="ts">
import { onMounted, ref, reactive} from 'vue'
import { tasksStore } from '../stores/Tasks'
    const tasksList = tasksStore()
    const newTask = reactive(ref(''));

    onMounted(() => {
        console.log(`the component is now mounted.`)
        tasksList.fetchTasks()
    })

    function addTaskToList(task : any) {
        /*TODO : Control de errores y formatos*/
        if (newTask) {
            tasksList.addTaskToList(newTask.value)
        }
        newTask.value = ''
    }


    function updateTaskStatus(indexTask : number) {
         tasksList.updateTaskStatus(indexTask)
    }

    function quitTaskFromList(indexTask : number) {
         tasksList.deleteTask(indexTask)
    } 
</script>

<template>
    <div class="greetings">
        <div class="txt-input-container">
            <input type="text" maxlength="500" v-model="newTask" placeholder="Introduzca una nueva tarea"  @keyup.enter="addTaskToList"/>
            <button v-on:click="addTaskToList">+</button>
        </div>
           <ul class="taskList" v-if=" tasksList.list">
                   <li v-for="(task, index) in tasksList.list" v-bind:class="{completed : !task.active, uncompleted : task.active,  listGroupItem : true}" :key="index" >
                       <div v-if="task.visible">

                           <img v-if="!task.active" class="editIcon" src="../assets/check_box.svg"  v-on:click="updateTaskStatus(index)" />

                           <img  v-else class="editIcon" src="../assets/check_box_outline.svg" v-on:click="updateTaskStatus(index)" />

                           <span class="taskName">{{ task.name }} </span>
                           <img class="deleteTask" src="../assets/delete.svg" v-on:click="quitTaskFromList(index)" />
                       </div>
                   </li>
           </ul>
    </div>
</template>

<style scoped>
    .txt-input-container{
        margin:30px 0;
    }
    .txt-input-container button {
        font-size: 14px;
        padding: 6px 12px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .txt-input-container input {
        border: 1px solid #ccc;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 2px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: calc(100% - 35px);
    }
    .taskList {
        list-style: none;
        padding-left: 0;
    }

    /**/
    .list-group-item:first-child {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    a.list-group-item, button.list-group-item {
        color: #555;
    }

    .list-group-item {

    }
    /**/
    .taskList li {
        color: #555;
        position: relative;
        display: block;
        padding: 0 10px;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid #ddd;
    }
    .taskList li:hover {
        background-color: #f5f5f5;   
    }
    .editIcon, .deleteTask {
        cursor: pointer;
        vertical-align: middle;
        padding : 10px;
    }
    .completed .editIcon {
        color : lawngreen

    }
    .uncompleted .editIcon {
        color: red
    }

    .taskName {
        width: calc(100% - 88px);
        display: inline-block;
        vertical-align: middle;
    }

    .completed .taskName {
        text-decoration: line-through;
        color : lightgray;
    }
</style>
