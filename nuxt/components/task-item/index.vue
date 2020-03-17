<template>
  <div class="task-item task-item-container" :class="{active: task.active}">
    <div class="actions actions-left">
    </div>
    <div class="item-description">{{ task.description }}</div>
    <div class="actions actions-right">
      <a class="action item-delete" @click="deleteTask"></a>
    </div>
    <input
      name="description"
      type="text"
      class="task-item-input"
      :class="{hidden: !task.editMode}"
      v-model="task.description"
      @keyup.enter="updateDescription"
    />
  </div>
</template>
<script src="./component.js"></script>
<style src="./styles.scss" lang="scss"></style>
