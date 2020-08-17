<template>
    <div class="wrapper-messanger">
        <div class="wrapper-messanger__top">
            <div>
                <h1 class="wrapper-messanger__h1">{{h1}}</h1>

                <select aria-label="filter message" class="wrapper-messanger__filter wrapper-messanger__filter_condition" name="select-filter"
                    id="select">
                    <option value="all questions">{{filterAll}}</option>
                    <option value="not read questions">{{filterNotRead}}</option>
                    <option value="send message">{{filterSendMessage}}</option>
                </select>
            </div>
            <hr class="wrapper-messanger__hr_condition">
        </div>

        <div class="messanger__cards-block"></div>
    </div>

</template>

<script>
    export default {
        name: 'app-messanger',
        data() {
            return {
                h1: 'Messenger',
                filterAll: 'All Questions',
                filterNotRead: 'Not Read Questions',
                filterSendMessage: 'Send Message',
            }
        },
    }
</script>

<style scoped>
    .wrapper-messanger {
        position: fixed;
        width: 70vw;
        height: 100vh;
        top: 0;
        right: 0;
    }

    @media all and (max-width: 925px) {
        .wrapper-messanger {
            width: 60vw;
        }
    }

    .messanger__cards-block {
        width: 100%;
        height: 100%;
        background-color: #d9e8f2;
    }

    h1,
    p {
        margin: 0;
    }

    .wrapper-messanger__h1 {
        text-align: left;
        font-size: 17px;
    }

    .wrapper-messanger__top {
        position: relative;
        height: 15vh;
        min-height: 60px;
        max-height: 80px;
        width: 100%;
        padding-left: 25px;
        display: flex;
        align-items: center;
    }

    .wrapper-messanger__filter {
        text-align: left;
        color: #d3d3d3;
        font-size: 12px;
        font-weight: bold;
    }

     .wrapper-messanger__filter_condition {
        margin-top: 5px;
        border: none;
        cursor: pointer;
        display: flex;
        transition: 0.3s;
        border-radius: 5px;
        background-color: transparent;
    }

    .wrapper-messanger__filter_condition:hover {
        box-shadow: 0 0 5px 1px;
        transition: 0.3s;
    }

    .wrapper-messanger__hr_condition {
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