<script>
  export let addTask;

  let description = '';

</script>

<style>
  .task-input {
      width: 100%;
      border-bottom: 2px solid #E7ECEF;
  }

  .task-input__input {
      width: 100%;
      box-sizing: border-box;
  }
</style>

<div class="task-input">
  <input
    bind:value={description}
    class="task-input__input" type="text"
    placeholder="What needs to be done?"
    on:keyup={(e) => { if (e.key === 'Enter') addTask(description) }}
  />
</div>
