<template>
    <div class="sidebar">
        <TopSidebar></TopSidebar>
        <messages-sidebar></messages-sidebar>
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
        }
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