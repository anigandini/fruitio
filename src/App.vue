<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  $white: #f7fbf6;
  .peach {
    $primary: #f07e19;
    $secondary: #ffee7f;
    $tertiary: #f39873;
    $quaternary: #fbdacf;
  }
  .lemon {
    $primary: #249c38;
    $secondary: #fee84c;
    $tertiary: #8ebd22;
    $quaternary: #f6e81d;
  }
  .coconut {
    $primary: #0484c7;
    $secondary: #efe5b0;
    $tertiary: #e05c18;
    $quaternary: #fbdacf;
  }
  .cherry {
    $primary: #c71617;
    $secondary: #fbdacf;
    $tertiary: #ed6ca5;
    $quaternary: $tertiary;
  }
}
</style>
