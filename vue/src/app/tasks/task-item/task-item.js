export default {
  name: 'task-item',
  props: ['task'],
  methods: {
    changeStatus () {
      this.task.active = !this.task.active;
      this.$store.dispatch('updateTask', this.task);
    },
    editTask () {
      debugger;
      this.task.editMode = true;
    },
    deleteTask () {
      this.$store.dispatch('deleteTask', this.task)
    },
    updateDescription () {
      this.task.editMode = false;
      this.$store.dispatch('updateTask', this.task);
    }
  }
};
