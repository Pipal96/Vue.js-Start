<template>
    <div class="sidebar">
        <TopSidebar></TopSidebar>
        <messages-sidebar @currentComponent="currentComponent"></messages-sidebar>
    </div>
</template>

<script>
    import TopSidebar from './TopSidebar.vue'
    import MessagesSidebar from './MessagesSidebar.vue'

    export default {
        name: "app-sidebar",
        components: {
            TopSidebar,
            MessagesSidebar,
        },
        data() {
            return {
                // test: '',
            }
        },
        methods: {
            currentComponent(event) {
                console.log(event + ' sidebar message')
                this.$emit('currentComponent', event)
                // this.test = event
                // console.log(this.test)
            }
        },
    }
</script>

<style scoped>
    .sidebar {
        position: fixed;
        left: 0;
        width: 30vw;
        height: 100vh;
        background-color: #05212a;
        top: 0;
        min-width: 265px;
    }

    @media all and (max-width: 925px) {
        .sidebar {
            width: 40vw;
        }
    }
</style>