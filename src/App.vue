<template>
  <main id="app" :class="$store.state.theme.themeColor">
    <Home/>
  </main>
</template>

<script lang="ts">
  import Home from '@/views/Home.vue'
  export default {
    name: 'App',
    components: {
      Home
    },
  }
</script>

<style lang="scss">
  @import "./styles/variables.scss";

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   

    #app {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: $white;

      button {
        background-color: $white;
      }

      &.cocount {
        @include isTheme('cocount');
      }

      &.peach {
        @include isTheme('peach');
      }

      &.cherry {
        @include isTheme('cherry');
      }

      &.lemon {
        @include isTheme('lemon');
      }

      &.watermelon {
        @include isTheme('watermelon');
      }

    }
  }
  
</style>
