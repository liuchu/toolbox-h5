<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo"/>
      <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="switchTab(tab1)">
          工作主页
        </a-menu-item>
        <a-menu-item key="2" @click="switchTab(tab2)">
          常用工具
        </a-menu-item>
        <a-menu-item key="3">
          其他
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <div :is="currentView"></div>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>


<script>
import WorkingApp from './components/WorkingApp.vue'
import DevTool from './components/DevTool.vue'

export default {
  name: 'App',
  components: {
    WorkingApp,
    DevTool
  },
  data() {
    return {
      tab1: WorkingApp,
      tab2: DevTool,
      currentView: WorkingApp
    }
  },
  methods: {
    switchTab(tab) {
      this.currentView = tab;
    }
  }
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
