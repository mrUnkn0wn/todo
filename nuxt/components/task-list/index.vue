<template>
  <div class="task-list-container">
    <task-item v-for="task in tasks" :task="task" :key="task.id"></task-item>
  </div>
</template>
<script src="./component.js"></script>
