<template>
    <h1>Страница товара</h1>
    <p>Страница с айди  {{ $route.params.id }}</p>
</template>

<script>
import axios from "axios"
    export default {
        data(){
            return {
                singleItem: null
            }
        },
        mounted() {
            axios
                .get('https://fakestoreapi.com/products/1')
                .then(response => (this.singleItem = response.data));
        },
    }
</script>

<style scoped>

</style>