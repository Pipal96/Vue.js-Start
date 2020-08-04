<template>
<div class="wrapper-nav">
    <div class="logo">
        <p>{{logo}}</p>
    </div>
 <nav>
     <ul>
         <li v-for="(link, index) in links" :key="index"><a href="#">{{link}}</a></li>
     </ul>
 </nav>
    </div>
</template>

<script>

export default {
    data(){
        return {
            logo: 'Logo JS',
            links: [
                "home", "news", "contact",
            ]
        }
    }
}

/* Написать фильтр который будет делать первую букву заглавной */
</script>

<style scoped>

ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    background-color: rgb(241, 208, 208);
}

</style>