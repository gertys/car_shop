<template>
<div class="page-auth">
    <UiContainer>
    <h2 class="title page-auth__title">Регистрация</h2>
    <form class="form" @submit.prevent="handleSubmit">
        <UiFormGroup label="Email">
        <div class="input-group">
            <input name="email" type="email" class="form-control" v-model="login"/>
        </div>
        </UiFormGroup>
        <UiFormGroup label="Имя">
        <div class="input-group">
            <input name="fullname" type="text" class="form-control" v-model="name"/>
        </div>
        </UiFormGroup>
        <UiFormGroup label="Пароль">
        <div class="input-group">
            <input name="password" type="password" class="form-control" v-model="password"/>
        </div>
        </UiFormGroup>
        <UiFormGroup label="Повтор пароля">
        <div class="input-group">
            <input type="password" class="form-control" v-model="repeatPassword"/>
        </div>
        </UiFormGroup>
        <UiFormGroup>
        <label class="checkbox">
            <input type="checkbox" class="checkbox__input" v-model="checked"/>
            <span class="checkbox__box"></span>
            Я согласен с условиями
        </label>
        </UiFormGroup>
        <div class="form__buttons">
        <button type="submit" class="button button_primary" :click="sendData">Зарегистрироваться</button>
        </div>
        <div class="form__append">Уже есть аккаунт? <router-link :to="{ name: 'login' }" class="headAuth logRegLink">Регистрация</router-link></div>
    </form>
    </UiContainer>
</div>
</template>

<script>
import UiFormGroup from '../components/UiFormGroup.vue';
import UiContainer from '../components/UiContainer.vue';

export default {
name: 'PageRegister',

data(){
    return {
        login: "",
        password: "",
        name: "",
        repeatPassword: "",
        checked: false,
        loading: false,
    }
},

components: {
    UiFormGroup,
    UiContainer,
},

methods: {
    handleSubmit() {
        this.$router.push({ name: 'login' });
    },

    sendData(){
        this.loading = true
        axios.post('/user', {
            login: this.login,
            password: this.password,
            name: this.name,
            repeatPassword: this.repeatPassword,
        })
        .then(function (response) {
            this.loading = false
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },

},
};
</script>

<style>

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
