export default {
  name: 'task-input',
  data () {
    return { description: '' }
  },
  methods: {
    addNewTask () {
      this.$store.dispatch('addTask', { description: this.description })
    }
  }
}
