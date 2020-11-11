<script>
  import TaskInput from '../../components/TaskInput.svelte';
  import TasksList from '../../components/TasksList.svelte';

  import TasksService from '../../services/tasks';

  let tasks = [];

  (async () => {
    tasks = await TasksService.getTasks();
  })();

  async function addTask (description) {
    const task = await TasksService.addTask(description);

    tasks = [...tasks, task];
  }

  async function updateTask (task) {
      const newTask = await TasksService.updateTask(task);

      tasks[tasks.findIndex(({ id }) => (id === task.id))] = newTask;

      tasks = tasks
  }

  async function deleteTask (taskId) {
      await TasksService.deleteTask(taskId);

      tasks = tasks.filter(({ id }) => (id !== taskId));
  }
</script>

<TaskInput addTask={addTask}/>
<TasksList
  tasks={tasks}
  updateTask={updateTask}
  deleteTask={deleteTask}
/>