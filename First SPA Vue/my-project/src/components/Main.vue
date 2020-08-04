<template>
    <main>
<Home></Home>
<News></News>
<Contact></Contact>
    </main>
</template>

<script>
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Contact from '../components/Contact.vue'

export default {
    name: 'app-home',
    components:{
        Home,News,Contact,
    }
}

</script>

<style scoped>

</style>