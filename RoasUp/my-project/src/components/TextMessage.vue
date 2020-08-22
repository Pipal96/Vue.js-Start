<template>
    <div class="wrapper-my-questions">
        <div class="wrapper-my-questions__top">
            <div>
                <h1 class="wrapper-my-questions__h1">{{h1}}</h1>
            </div>
            <hr class="wrapper-my-questions__hr_condition">
        </div>

        <div class="my-questions__cards-block">
            <form @submit.prevent="showMess" class="form" action="#">

                <textarea v-model="cellVar" class="form-message" name="messageUser" id="user_message" cols="30"
                    rows="10" placeholder="Your message"></textarea>

                <input class="form-message__submit" type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                h1: 'Send Message',
                variable: {
                    message: ''
                },
                cellVar: '',
                arrayMessage: [],
            }
        },
        methods: {
            showMess() {
                if (this.cellVar.length >= 1) {
                    this.variable.message = this.cellVar
                    this.arrayMessage.push(this.variable.message)
                    console.log(this.arrayMessage)
                    this.$emit('SendMessage', this.arrayMessage)
                    this.variable.message = ''
                    // Не получается добавить в массив объекты, решить проблему.
                }
            }
        },
    }
</script>

<style scoped>
    .wrapper-my-questions {
        position: fixed;
        width: 70vw;
        height: 100vh;
        top: 0;
        right: 0;
    }

    @media all and (max-width: 925px) {
        .wrapper-my-questions {
            width: 60vw;
        }
    }

    .my-questions__cards-block {
        width: 100%;
        height: 100%;
        background-color: #d9e8f2;
        padding: 15px 0;
    }

    .my-questions__cards-block>.my-questions__card_condition:nth-child(1n + 2) {
        margin: 15px auto;
    }

    .my-questions__cards-block:first-child {
        margin-top: 0px;
    }

    h1,
    p {
        margin: 0;
    }

    .wrapper-my-questions__h1 {
        text-align: left;
        font-size: 17px;
    }

    .wrapper-my-questions__top {
        position: relative;
        height: 15vh;
        min-height: 60px;
        max-height: 80px;
        width: 100%;
        padding-left: 25px;
        display: flex;
        align-items: center;
    }

    .wrapper-my-questions__hr_condition {
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #d3d3d3;
        border-color: #d3d3d3;
        border: none;
        margin: 0;
    }

    .form-message {
        resize: none;
        width: 80%;
        height: 50vh;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 2px 0;
        transition: 0.3s;

        padding: 15px;
    }

    .form-message:hover {
        box-shadow: 0 0 2px 0, 0 0 5px 0;
        transition: 0.3s;
    }

    .form {
        width: 100%;
        height: 100%;
    }

    .form-message__submit {
        display: block;
        margin: 0 auto;
    }
</style>