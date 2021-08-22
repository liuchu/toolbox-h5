<template>
  <div>
    <a-row>
      <a-col :span="2">
        <a-checkbox @change="onChecked"></a-checkbox>
      </a-col>
      <a-col :span="8">
        <div>
          <p>{{ msg.summary }}</p>
          <p>{{ msg.notifyTime }}</p>
        </div>
      </a-col>
      <a-col :span="8">
        <p>{{ msg.comment }}</p>
      </a-col>
      <a-col :span="2">
        <a-button icon="edit">
          修改
        </a-button>
      </a-col>
    </a-row>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    msg: Object
  },
  methods: {
    onChecked(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  }
}
</script>

<style scoped>

</style>