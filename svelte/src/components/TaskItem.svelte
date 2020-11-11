<script>
  export let task;
  export let updateTask;
  export let deleteTask;

  let newDescription = '';

  function editTask () {
    newDescription = task.description;
    task.editMode = true;
  }

  function exitEditMode () {
    task.editMode = false;
  }

  async function udpateDescription () {
    await updateTask(Object.assign({}, task, {
      description: newDescription
    }));
  }

  async function changeStatus () {
    await updateTask(Object.assign({}, task, {
      active: !task.active
    }));
  }
</script>
<style>
  .task-item {
      position: relative;
      line-height: 20px;
      padding: 10px 20px;
      padding-left: 50px;
      font-size: 18px;
      border-bottom: 1px solid #E7ECEF;
  }

  .task-item__actions {
      position: absolute;
      top: 0px;
  }
  .task-item__actions_left {
      left: 0px;
  }
  .task-item__actions_right {
      right: 0px;
  }
  .task-item__action {
      width: 40px;
      height: 40px;
      display: inline-block;
      cursor: pointer;
  }
  .task-item__action_hidden {
      display:none !important;
  }
  .task-item__action_change-status {
      background: url('/img/checkbox-checked.png') no-repeat center center;
  }
  .task-item__action_edit {
      background: url('/img/edit.png') no-repeat center center;
  }
  .task-item__action_delete {
      background: url('/img/delete.png') no-repeat center center;
  }
  .task-item__description {
      text-decoration: line-through;
      color: #999;
  }
  .task-item__description_active {
      text-decoration: none;
      color: #4b4d58;
  }
  .task-item__action_change-status_active {
      background: url('/img/checkbox-unchecked.png') no-repeat center center;
  }
  .task-item__input {
      position: absolute;
      width: 100%;
      z-index: 100;
      padding-right: 50px;
      top: 0;
      left: 0;
      box-sizing: border-box;
      font-size: 16px;
  }
  .task-item__input-hidden {
      display:none !important;
  }
</style>
<div
  class="task-item"
  class:task-item_active={task.active}
>
<div class="task-item__actions task-item__actions_left">
  <button
    class="task-item__action task-item__action_change-status"
    class:task-item__action_change-status_active={task.active}
    on:click={changeStatus}
  ></button>
</div>
<div
  class="task-item__description"
  class:task-item__description_active={task.active}
>
  {task.description}
</div>
  <div class="task-item__actions task-item__actions_right">
    <button
      class="task-item__action task-item__action_edit"
      class:task-item__action_hidden={!task.active}
      on:click={editTask}
    ></button>
    <button
      class="task-item__action task-item__action_delete" on:click={() => deleteTask(task.id)}
    ></button>
  </div>
  <input
      class="task-item__input"
      class:task-item__input-hidden={!task.editMode}
      bind:value={newDescription}
      on:blur={exitEditMode}
      on:keyup={(e) => { if (e.key === 'Enter') udpateDescription()}}
  />
</div>