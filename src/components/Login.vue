<template>
    <div class="container">
        <div class="level">
            <div class="level-item">
                <h2 class="title is-3">Вход</h2>
            </div>
        </div>
        <div class="level">
            <div class="level-item">
                <form action="" @submit.prevent="login">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" required v-model="email">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="envelope" />
                            </span>
                            <span class="icon is-small is-right">
                                <font-awesome-icon icon="check" />
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" required v-model="password">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="lock" />
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-success">
                                Войти
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      email : "",
      password : "",
      notUser: ""
    }
  },
  methods: {
    login: function () {
      const email = this.email;
      const password = this.password;
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/account'))
        .catch(err => console.log(err));
    },
  },
};
</script>
