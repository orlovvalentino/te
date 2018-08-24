<template>
    <div class="container">
        <register-form/>
        <login-form/>
    </div>
</template>

<script>
import RegisterForm from '@/components/Register.vue';
import LoginForm from '@/components/Login.vue';

export default {
  name: 'home',
  components: {
    RegisterForm,
    LoginForm,
  },
};
</script>
