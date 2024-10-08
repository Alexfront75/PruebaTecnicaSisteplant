<script setup lang="ts">
    import { tasksStore } from '../stores/Tasks'
    const taskStore = tasksStore()
    const filters = [
        { value_raw: 'all', value : 'Ver todo'},
        { value_raw: 'actives', value: 'Incompletos' },
        { value_raw: 'unactives', value: 'Completos' },
    ]
    function changeFilter(filter : any) {
        taskStore.changeFilter(filter)
    }

</script>

<template>
    <div class="filter-block">
        <button v-for="(filter, index) in filters" v-on:click="changeFilter(filter.value_raw)" v-bind:class="{activeFilter : taskStore.activeFilter === filter.value_raw }">{{filter.value}}</button>
    </div>
</template>

<style scoped>
    .filter-block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    button {
        color: #555;
        border: 1px solid #ddd;
        padding: 10px;
        cursor: pointer;
    }
    button.activeFilter {
        border-color: coral;
    }
</style>
