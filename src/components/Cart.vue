<template>
    <router-link :to="{ name: 'cart' }">
        <div class="cart__wrapper">
            <img src="../assets/cart.svg" alt="">
            <p class="cart__quanty">{{ $store.getters.CART.length }}</p>
        </div>
    </router-link>
</template>
  
<script>
  export default {
    name: 'Cart',
  };
</script>
  
<style scoped>
    .cart__wrapper{
        margin-left: 10px;
        position: relative;
    }

    
    .cart__wrapper img {
        width: 35px;
        cursor: pointer;
    }

    .cart__quanty{
        position: absolute;
        left: 3%;
        top: 51%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 3px;
        box-sizing: border-box;
        background: black;
        color: white;
        text-align: center;
    }
</style>
  