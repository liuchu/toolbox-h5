<template>
  <div>
    <a-row>
      <a-col :span="8">
        <TodoList></TodoList>
      </a-col>
      <a-col :span="8">
        <PlanOfToday></PlanOfToday>
      </a-col>
      <a-col :span="8">
        <Weather></Weather>
      </a-col>
    </a-row>
  </div>
</template>

<script>

import TodoList from './TodoList.vue'
import PlanOfToday from './PlanOfToday.vue'
import Weather from './Weather.vue'

export default {
  name: 'MainPage',
  components: {
    TodoList,
    PlanOfToday,
    Weather
  }

}
</script>

<style scoped>

</style>