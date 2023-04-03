<template>
    <h1>shop</h1>
    <UiContainer>
        <div class="products__wrapper">
            <div class="products" v-for="item in shopItem" :key="item.id" :id="item.id">
                <p>{{ item.title }}</p>
                <p>{{ item.price }}Р</p>
                <img :src="item.image" alt="photo" class="products__img">
                <button class="cart__btn btn" @click="this.$store.dispatch('addItem', item.id);">Добавить в корзину</button>
                <router-link :tag="button" :to="`/product/${item.id}`">
                    <button class="cart__btn btn">Страница товара</button> 
                </router-link>
            </div>
        </div>
    </UiContainer>
</template>

<script>
import axios from "axios"
import UiContainer from "../components/UI/UiContainer.vue"
    export default {
        data(){
            return {
                shopItem: null,                
            }
        },
        name: "Items",
        components: {UiContainer},
        methods: {

        },
        created() {
            axios
                .get('https://fakestoreapi.com/products?limit=10')
                .then(response => (this.shopItem = response.data));
        }
    }
</script>

<style scoped>

.products__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.products{
    flex: 0 0 32%;
    margin: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.products__img{
    width: 100px;
    height: 100px;
}

.cart__btn{
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
}

.btn{
    background-color: #4dccc6;
    background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    line-height: 42px;
    padding: 0;
    border: none;
}
</style>