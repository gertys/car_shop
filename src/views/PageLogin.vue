<template>
    <div class="page-auth">
      <UiContainer>
        <h2 class="title page-auth__title">Вход</h2>
        <form class="form" @submit.prevent="handleSubmit">
          <UiFormGroup label="Email">
            <div class="input-group">
              <input name="email" type="email" placeholder="email" class="form-control" v-model="login"/>
            </div>
          </UiFormGroup>
          <UiFormGroup label="Пароль">
            <div class="input-group">
              <input name="password" type="password" placeholder="password" class="form-control" v-model="password"/>
            </div>
          </UiFormGroup>
          <div class="form__buttons">
            <button type="submit" class="button button_primary button_block" :click="handleSubmit">Войти</button>
          </div>
          <div class="form__append">Нет аккаунта? <router-link :to="{ name: 'register' }" class="headAuth logRegLink">Регистрация</router-link></div>
        </form>
      </UiContainer>
    </div>
  </template>
  
  <script>
  import UiContainer from '../components/UiContainer.vue';
  
  export default {
    name: 'PageLogin',
    
    data() {
        return {
            login: "",
            password: "",
            loading: false,
        }
    },

    components: {
      UiFormGroup,
      UiContainer,
    },
  
    methods: {
      handleSubmit() {
        this.$router.push(this.$route.query.from || { name: 'home' });
      },
      sendData(){
        this.loading = true
        axios({
            method: 'get',
            url: '/login',
            })
            .then(function (response) {
                loading = false
                this.$router.push(this.$route.query.from || { name: 'home' });
        });
      },
    },
  };
  </script>
  
<style scoped>
.page-auth__title{
    text-align: center;
    margin-top: 40px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-group input {
    width: 500px;
    height: 50px;
}

.input-group input:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}

.button_primary{
    padding: 15px 60px;
    border-radius: 10px;
    border: none;
    background-color: aquamarine;
    cursor: pointer;
    margin-bottom: 15px;
}


</style>