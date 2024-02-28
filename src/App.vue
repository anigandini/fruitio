<template>
  <div id="app" :class="$store.state.theme.themeColor">
    <div id="nav">
      <TemeSelector></TemeSelector>
    </div>
  </div>
</template>

<script lang="ts">
  import TemeSelector from './components/ThemeSelector.vue'
  export default {
    name: 'App',
    components: {
      TemeSelector
    },
  }
</script>

<style lang="scss">
  @import './styles/variables.scss';

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

      &.peach {
        $primary: #f07e19;
        $secondary: #ffee7f;
        $tertiary: #f39873;
        $quaternary: #fbdacf;
      }

      &.lemon {
        $primary: #249c38;
        $secondary: #fee84c;
        $tertiary: #8ebd22;
        $quaternary: #f6e81d;

        background-color: $secondary;
      }

      &.coconut {
        $primary: #0484c7;
        $secondary: #efe5b0;
        $tertiary: #e05c18;
        $quaternary: #fbdacf;

      }

      &.cherry {
        $primary: #c71617;
        $secondary: #fbdacf;
        $tertiary: #ed6ca5;
        $quaternary: $tertiary;
      }

      &.watermelon {
        $primary: #9ace30;
        $secondary: #f01788;
        $tertiary: #f03094;
        $quaternary: #e9f5b9;

        background-color: $tertiary;
      }
    }
  }
  
</style>
