<template>
  <h1>{{h1}}</h1>
</template>

<script>

export default {
    name: 'app-questions',
data() {
    return {
          h1: 'Questions Messenger',
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