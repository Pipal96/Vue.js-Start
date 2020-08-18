<template>
    <div class="card">
        <div class="card__status card__status_condition">
            <div class="card__top-status card__status_open-case">
                <span aria-label="id task" class="card__id-status">{{dafault_id_status_card}}</span>
                <div class="card__triangle_open-case"></div>
            </div>
            <div class="card__wrapper-status-time">
                <span class="card__time" aria-label="how when the task was set">{{default_time}}</span>
            </div>
        </div>

        <div class="card__message-block">
            <p class="card__message">{{default_message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dafault_id_status_card: 'q243',
                default_message: 'Hello, what is the delivery time ?',
                default_time: '1h',
                user_time: "1:33",
            }
        },
    }
</script>

<style scoped>
    .card {
        margin: 0px auto;
        width: 86%;
        height: 90px;
        background-color: #fff;
        padding: 15px;
        border-radius: 3px;

        display: flex;
    }

    @media all and (max-width: 925px) {
        .card {
            width: 100%;
        }
    }

    .card__status {
        height: 85px;
        min-width: 55px;
        width: 10%;
        max-width: 75px;
        background-color: #f3f3f3;
        border-radius: 3px;
    }

    .card__status_condition {
        margin-right: 20px;
    }

    .card__top-status {
        width: 100%;
        height: 25px;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__triangle_open-case {
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 6px solid #19bcf3;
        position: absolute;
        bottom: -6px;
        left: 15%;
    }

    .card__triangle_close-case {
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 6px solid #5bbd72;
        position: absolute;
        bottom: -6px;
        left: 15%;
    }

    .card__status_open-case {
        background-color: #19bcf3;
    }

    .card__status_close-case {
        background-color: #5bbd72;
    }

    .card__id-status {
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
    }

    .card__wrapper-status-time {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .card__time {
        color: #aaaaaa;
        font-weight: bold;
    }

    .card__message {
        margin: 5px 0;
        color: #636363;
        font-weight: 500;
    }
</style>