import { mapState } from 'vuex'

import TaskItem from '../task-item/index.vue';

export default {
  name: 'task-list',
  components: { TaskItem },
  computed: mapState({
    tasks: state => state.tasks.data
  })
}
