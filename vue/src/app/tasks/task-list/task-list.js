import { mapState } from 'vuex'

import TaskItem from '../task-item/task-item.vue';

export default {
  name: 'task-list',
  components: { TaskItem },
  computed: mapState({
    tasks: state => state.tasks.data
  })
}
