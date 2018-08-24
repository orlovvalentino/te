<template>
    <div class="container">
        <div class="level">
            <div class="level-item">
                <h2 class="title is-3">Привет, {{name}}</h2>
            </div>
        </div>
        <div class="level">
            <div class="level-item">
                <div class="field">
                    <p class="control">
                        <button class="button is-success" @click="logout">
                            Выйти
                        </button>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    computed : {
      name: function () {return this.$store.state.user.name},
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/');
          });
      },
    },
  };
</script>
