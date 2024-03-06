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
    background-image: url('../assets/patterns-sprite-mobile.png');
    
    &.cherry {
      background-repeat: no-repeat;
      background-position: -998px -263px;
    }

    &.coconut {
      background-repeat: no-repeat;
      background-position: -1492px -163px;
    }

    &.lemon {
      background-repeat: no-repeat;
      background-position: -504px -139px;
    }

    &.peach {
      background-repeat: no-repeat;
      background-position: -1986px -204px;
    }

    &.watermelon {
      background-repeat: no-repeat;
      background-position: -10px -159px;
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