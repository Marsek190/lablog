<template>
  <div class="card auth-form">
    <div class="card-content">
      <div class="card-title">Sign in</div>
      <alert v-if="message" :message="message" type="error"/>
      <form action="#" @submit.prevent="submit">
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" v-model="email">
          <label for="email">Email</label>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">vpn_key</i>
          <input id="password" type="password" class="validate" v-model="password">
          <label for="password">Password</label>
        </div>

        <div class="btn-group">
          <router-link class="btn waves-effect waves-light grey" to="/">
            Back
            <i class="material-icons left">keyboard_backspace</i>
          </router-link>
          <button class="btn waves-effect waves-light" type="submit">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '../../components/Alert'

export default {
  data() {
    return {
      email: null,
      password: null,
      errors: [],
      message: null
    }
  },
  components: {
    alert: Alert
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    submit() {
      this.clearErrors()
      this.login({
        payload: {
          email: this.email,
          password: this.password
        },
        context: this
      }).then(() => {
        this.errors.length || this.$router.replace({ name: 'home' })
      })
    },
    clearErrors() {
      this.errors = []
      this.message = null
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  min-width: 400px;

  .input-field {
    margin-bottom: 2rem;
  }

  .card-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
  }
}
</style>
