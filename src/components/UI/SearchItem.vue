<template>
    <input type="text" placeholder="Введите код запчасти или VIN-номера" class="search__input">
</template>

<script>
    export default {

    }
</script>

<style scoped>
.search__input {
    border: none;
    border-radius: 28px;
    box-shadow: none;
    font-size: 16px;
    height: 56px;
    padding: 2px 17px;
    position: relative;
    width: 100%;
}

.search__input:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}

</style>