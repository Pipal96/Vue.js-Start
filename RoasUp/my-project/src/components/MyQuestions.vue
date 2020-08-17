<template>
    <div class="wrapper-my-questions">
        <div class="wrapper-my-questions__top">
            <div>
                <h1 class="wrapper-my-questions__h1">{{h1}}</h1>

                <select aria-label="filter message"
                    class="wrapper-my-questions__filter wrapper-my-questions__filter_condition" name="select-filter"
                    id="select">
                    <option value="all questions">{{filterAll}}</option>
                    <option value="not read questions">{{filterNotRead}}</option>
                    <option value="send message">{{filterSendMessage}}</option>
                </select>

            </div>
            <hr class="wrapper-my-questions__hr_condition">
        </div>

        <div class="my-questions__cards-block">

            <app-card class="my-questions__card_condition"></app-card>
            <app-card class="my-questions__card_condition"></app-card>

        </div>
    </div>


</template>

<script>
    import cards from './QuestionsCards.vue'

    export default {
        name: 'app-questions',
        components: {
            'app-card': cards
        },
        data() {
            return {
                h1: 'Questions Messenger',
                filterAll: 'All Questions',
                filterNotRead: 'Not Read Questions',
                filterSendMessage: 'Send Message',
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

    .wrapper-my-questions__filter {
        text-align: left;
        color: #d3d3d3;
        font-size: 12px;
        font-weight: bold;
    }

    .wrapper-my-questions__filter_condition {
        margin-top: 5px;
        border: none;
        cursor: pointer;
        display: flex;
        transition: 0.3s;
        border-radius: 5px;
    }

    .wrapper-my-questions__filter_condition:hover {
        box-shadow: 0 0 5px 1px;
        transition: 0.3s;
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
</style>