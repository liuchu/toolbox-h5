<template>

    <div id="todo-list">
        <ul>
            <li v-for="item in items" :key="item.message">
                <TodoItem v-bind:msg="item"></TodoItem>
            </li>
        </ul>

    </div>
    
</template>

<script>

    import TodoItem from './TodoItem.vue'

    export default {
        name: "TodoList",
        components: {
            TodoItem
        },
        data: function () {
            return {
                "items": [
                    {
                        "summary": "测试标题1",
                        "notifyTime": "明天 11:00",
                        "comment": "测试注释1"
                    },
                    {
                        "summary": "测试标题2",
                        "notifyTime": "明天 15:00",
                        "comment": "测试注释2"
                    },
                    {
                        "summary": "测试标题3",
                        "notifyTime": "明天 16:00",
                        "comment": "测试注释3"
                    }
                ]

            }
        }
    }
</script>

<style scoped>

</style>