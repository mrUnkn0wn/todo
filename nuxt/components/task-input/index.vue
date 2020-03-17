<template>
  <div class="task-input-container">
    <input
      name="newTask"
      type="text"
      v-model.lazy="description"
      @keyup.enter="addNewTask"
      placeholder="What needs to be done?"/>
  </div>
</template>
<script src="./component.js"></script>
<style src="./styles.scss" lang="scss"></style>
