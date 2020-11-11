<script>
  import TaskItem from './TaskItem.svelte';

  export let tasks;
  export let updateTask;
  export let deleteTask;
</script>
<style>

</style>

{#each tasks as task}
  <TaskItem
    task={task}
    updateTask={updateTask}
    deleteTask={deleteTask}
  />
{/each}