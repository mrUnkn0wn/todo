export default {
  name: 'task-item',
  props: ['task'],
  methods: {
    changeStatus () {
      const task = Object.assign({}, this.task);
      task.active = !task.active;
      this.$store.dispatch('tasks/update', task);
    },
    editTask () {
      this.task.editMode = true;
    },
    deleteTask () {
      this.$store.dispatch('tasks/delete', this.task)
    },
    updateDescription () {
      this.task.editMode = false;
      this.$store.dispatch('tasks/update', this.task);
    }
  }
};
