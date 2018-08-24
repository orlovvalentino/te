<template>
    <div class="container">
        <div class="level">
            <div class="level-item">
                <h2 class="title is-3">Регистрация</h2>
            </div>
        </div>
        <div class="level">
            <div class="level-item">
                <form @submit.prevent="register">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" v-model="name" required
                                   placeholder="Name">
                        </div>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" required
                                   v-model="email">
                            <span class="icon is-small is-left">
                            <font-awesome-icon icon="envelope"/>
                        </span>
                            <span class="icon is-small is-right">
                            <font-awesome-icon icon="check"/>
                        </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" required
                                   v-model="password">
                            <span class="icon is-small is-left">
                            <font-awesome-icon icon="lock"/>
                        </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Confirm password"
                                   required v-model="password_confirmation">
                            <span class="icon is-small is-left">
                            <font-awesome-icon icon="lock"/>
                        </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-success">
                                Зарегистрироваться
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
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    register() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/account'))
        .catch(err => console.log(err));
    },
  },
};
</script>
