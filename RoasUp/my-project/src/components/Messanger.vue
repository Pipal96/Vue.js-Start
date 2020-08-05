<template>
<div class="wrapper"><h1>{{h1}}</h1></div>
  
</template>

<script>
export default {
    name: 'app-messanger',
    data() {
        return {
            h1: 'Messenger',
        }
    },
}
</script>

<style scoped>
.wrapper {
    position: fixed;
    width: 60vw;
    height: 100vh;
    top: 0;
    right: 0;
}
</style>