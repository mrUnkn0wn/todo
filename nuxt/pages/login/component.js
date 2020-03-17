export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },

  head () {
    return {
      title: 'Login'
    }
  },

  methods: {
    submit () {
     const params = {
        username: this.username,
        password: this.password
      }

      this.$store.dispatch('auth/login', params).then(() => {
        if (this.$store.getters['auth/isAuth']) {
          this.$router.push('/tasks');
        }
      });
    }
  }
}