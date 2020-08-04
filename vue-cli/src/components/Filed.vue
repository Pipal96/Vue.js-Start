<template>
<div>
    <app-header></app-header>

    <div>
        <input v-model="message" type="text">
    <p>{{ message}}</p>
    </div>
    </div>

</template>

<script>
export default {
    data () {
        return{
            message: ''
        }
    }
}
</script>

