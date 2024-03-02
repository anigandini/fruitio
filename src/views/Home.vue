<template>
  <div class="home">
    <ThemeSelector></ThemeSelector>
  </div>
</template>

<script lang="ts">
import ThemeSelector from "@/components/ThemeSelector.vue";
import { mapState } from "vuex";

export default {
    name: "Home",
    components: {
        ThemeSelector,
    },
};
</script>

<style lang="scss">
  .home {
    @media screen and (min-width: 768px){
      section {
        height: 50vh;
      }
    }
  }
</style>