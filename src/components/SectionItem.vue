<template>
    <router-link :to="`/search/${this.link}`" class="card__title">
        <div class="sectionItem__wrapper">
            <div class="sectionItem-img">
                <img src="../assets/breakSection.png" alt="">
            </div>
            <div class="sectionItem-text">
                <p>{{ this.title }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import {RouterLink } from "vue-router";
    export default {
        name: "SectionItem",
        props: {
            title : {
                type: String,
                default: "SomeSection",
            },
            img: {
                type: String,   
            },
            link: {
                type: String,
            }
        },
    }
</script>

<style scoped>

.sectionItem__wrapper{

}
.sectionItem-img{
    position: relative;
}
.sectionItem-img img{
    width: 200px;
    height: 200px;
}

.sectionItem-text{
    display: flex;
    justify-content: center;
    padding: 10px 5px 10px 5px;
    background-color: black;
    border-radius: 20px;
    cursor: pointer;
}

.sectionItem-text p{
    color: #fff;
}

</style>