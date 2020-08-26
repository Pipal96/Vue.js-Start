<template>
    <div class="wrapper">
        <div class="user-block">
            <div class="user-photo">
            </div>
            <div class="info">
                <p class="blod-text">{{userName}}</p>
                <p class="text">{{status}}</p>
            </div>
            <button @click="ClickSendMessage" aria-label="adds message"
                class="button-add button-add_condition-sidebar">+</button>


        </div>
        <hr class="top-sidebar__hr_condition">
    </div>
</template>

<script>
    export default {
        name: 'app-topSidebar',
        data() {
            return {
                userName: 'David Hill',
                status: 'online',
                eventClickButton: '',
            }
        },
        methods: {
            ClickSendMessage() {
                this.$emit('switchToTheMessageComponent', this.eventClickButton)
            }
        },
    }
</script>

<style scope>
    .user-block {
        width: 80%;
        height: 15vh;
        min-height: 60px;
        max-height: 80px;
        padding: 20px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }

    .user-photo {
        width: 35px;
        height: 35px;
        background-color: #2a4249;
        border-radius: 5px;
        cursor: pointer;
    }

    .info {
        margin-left: 10px;
    }

    .top-sidebar__hr_condition {
        margin: 0 auto;
        width: 80%;
        border: none;
        height: 1px;
        background: rgb(42, 66, 73);
        background: radial-gradient(circle, rgba(42, 66, 73, 1) 0%, rgba(5, 33, 42, 1) 100%);
    }
</style>