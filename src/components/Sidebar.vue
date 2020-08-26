<template>
    <div class="sidebar">
        <TopSidebar @switchToTheMessageComponent="switchToTheMessageComponent"></TopSidebar>
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
                emersionDate: '',
            }
        },
        methods: {
            currentComponent(event) {
                this.$emit('currentComponent', event)
            },
            switchToTheMessageComponent(event) {
                this.emersionDate = event
                this.emersionDate = 'app-textmessanger'
                this.$emit('switchToTheMessageComponent', this.emersionDate)
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