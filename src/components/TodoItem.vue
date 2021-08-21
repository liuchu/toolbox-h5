<template>
    <div>
        <p><span>{{msg.summary}}</span></p>
        <p><span>{{msg.notifyTime}}</span></p>
        <p><span>{{msg.comment}}</span></p>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            msg: Object
        }
    }
</script>

<style scoped>

</style>