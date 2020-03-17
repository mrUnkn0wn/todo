import TaskInput from '~/components/task-input/index.vue';
import TaskList from '~/components/task-list/index.vue';

export default {
  name: 'tasks',
  components: { TaskInput, TaskList },
  fetch ({ store }) {
    return store.dispatch('tasks/load')
  },
  head () {
    return {
      title: 'Tasks'
    }
  }
}
