<template>
  <main class="home" :class="themeColor">
      <ThemeSelector class="to-bottom"></ThemeSelector>
  </main>
</template>

<script lang="ts">
import ThemeSelector from "@/components/ThemeSelector.vue";
import { mapState } from "vuex";

export default {
    name: "Home",
    components: {
        ThemeSelector,
    },
    computed: {
        ...mapState("theme", ["themeColor"]),
    },
};
</script>

<style lang="scss">
  .home {
    height: 100%;
    display: flex;
	  width: 100%;
    
    &.cherry {
      background: url('../assets/patterns-sprite.png') no-repeat -1470px -595px;
    }

    &.coconut {
      background: url('../assets/patterns-sprite.png') no-repeat -10px -633px;
    }

    &.lemon {
      background: url('../assets/patterns-sprite.png') no-repeat 5px -1122px;
    }

    &.peach {
      background: url('../assets/patterns-sprite.png') no-repeat -187px 299px;
    }

    &.watermelon {
      background: url('../assets/patterns-sprite.png') no-repeat -1534px 278px;
    }

    .to-bottom {
      align-self: flex-end;
    }

    @media screen and (min-width: 768px){
      section {
        height: 50vh;
      }
    }
  }
</style>