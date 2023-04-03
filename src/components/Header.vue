<template>
    <div class="wrapper">
        <UiContainer>
            <div class="menu">
                <nav class="nav nva-menu">
                    <a href="#" class="nav__item">Главная</a>
                    <a href="#" class="nav__item">Как оформить заказ</a>
                    <a href="#" class="nav__item">Мои заказы</a>
                    <a href="#" class="nav__item">Корзина</a>
                    <a href="#" class="nav__item">VIN-запрос</a>
                    <a href="#" class="nav__item">Обмен и возврат</a>
                    <a href="#" class="nav__item">Контакты</a>
                    <a href="#" class="nav__item">Новости</a>
                    <a href="#" class="nav__item">Autodealer</a>
                </nav>
                <div class="headAuth nav__item">
                    <router-link :to="{ name: 'login' }" class="headAuth loginLink">Логин</router-link>
                    /
                    <router-link :to="{ name: 'register' }" class="headAuth logRegLink">Регистрация</router-link>
                </div>
            </div>
    </UiContainer>
    </div>
</template>

<script>
import {RouterLink } from "vue-router";
import UiContainer from "./UI/UiContainer.vue"
    export default {
        components : {UiContainer},
    }
</script>

<style scoped>

.wrapper { 
    background-color: black;
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
}

.nav__item {
    text-decoration: none;
    padding-right: 15px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
}
</style>