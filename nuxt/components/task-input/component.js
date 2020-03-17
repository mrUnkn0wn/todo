export default {
  name: 'task-input',
  data () {
    return { description: '' }
  },
  methods: {
    addNewTask () {
      this.$store.dispatch('tasks/add', { description: this.description })
    }
  }
}
