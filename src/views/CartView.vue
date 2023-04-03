<template>
    <Header/>
    <h1>Корзина</h1>
    <div v-for="item in cartItem" class="cart__item">
        <p>{{ item }}</p>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
    export default {
    name: "CartView",
    components: { Header, Slider },
    data(){
        return {
            items: [],
        }
    },
    computed: {
        cartItem() {
            return this.$store.getters.CART;
        },
    },
}
</script>

<style scoped>
    .cart__item{
        text-align: center;
    }
</style>