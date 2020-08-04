<template>
<div>
    <h1>Пробный текст</h1>
    <app-message></app-message>
</div>
</template>

<script>
import Filed from './Filed.vue'

export default {
    components:{
        'app-message': Filed
    }
}
</script>