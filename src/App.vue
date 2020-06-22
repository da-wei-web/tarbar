<template>
  <div id="app">
    <tar-bar>
      <tar-bar-item>
        <template  v-slot:slot-icon>
          <span class="iconfont icon-wodezhiwei"></span>
        </template>
        <template  v-slot:slot-text>
          <span class="text">职位</span>
        </template>
      </tar-bar-item>
      <tar-bar-item>
        <template  v-slot:slot-icon>
          <span class="iconfont icon-gongsimingcheng"></span>
        </template>
        <template  v-slot:slot-text>
          <span class="text">公司</span>
        </template>
      </tar-bar-item>
      <tar-bar-item>
        <template  v-slot:slot-icon>
          <span class="iconfont icon-xiaoxi"></span>
        </template>
        <template  v-slot:slot-text>
          <span class="text">消息</span>
        </template>
      </tar-bar-item>
      <tar-bar-item>
        <template  v-slot:slot-icon>
          <span class="iconfont icon-wode"></span>
        </template>
        <template  v-slot:slot-text>
          <span class="text">我的</span>
        </template>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
  import TarBar from "./components/tarbar/TarBar";
  import TarBarItem from "./components/tarbar/TarBarItem";

  let size = document.documentElement.clientWidth / 360;
  document.documentElement.style.fontSize = size * 100 + "px";

  export default {
    name: 'App',
    components: {
      TarBar,
      TarBarItem
    }
  }
</script>


<style>
  @import "./assets/css/reset.css";
  @import "./assets/css/reset.css";
  @import "./assets/iconfonts/iconfont.css"; 
</style>
