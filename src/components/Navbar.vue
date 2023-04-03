<template>
    <nav class="nav navbar-bottom__menu">
        <a href="#" class="nav__item">Шины</a>
        <a href="#" class="nav__item">Диски</a>
        <a href="#" class="nav__item">Масла</a>
        <a href="#" class="nav__item">Лампы</a>
        <a href="#" class="nav__item">Аккумуляторы</a>
        <a href="#" class="nav__item">Запчасти для ТО</a>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
    }
</script>

<style>
.navbar-bottom__menu {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    min-height: 62px;
    align-items: center;
    margin: auto;
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