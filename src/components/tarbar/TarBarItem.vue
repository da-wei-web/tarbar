<template>
  <li class="tar-bar-item">
    <a href="#">
      <slot name="slot-icon"></slot>
      <slot name="slot-text"></slot>
    </a>
  </li>  
</template>

<script>
  export default {
    name: 'TarBarItem',
  }
</script>

<style scoped>
  .tar-bar-item{
    flex: 1;
    text-align: center;
  }

  .tar-bar-item > a{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #333;
  }
  span{
    display: inherit;
  }
  .iconfont{
    width: 100%;
    padding-top: .06rem;
    font-size: .24rem;
  }
  .text{
    width: 100%;
    padding-bottom: .03rem;
    font-size: .12rem;
  }

</style>