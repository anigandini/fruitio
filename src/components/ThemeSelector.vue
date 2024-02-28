<template>
  <ul>
    <li v-for="theme, index in themes" :key="index">
      <button @click="changeTheme(theme)" :class="themeColor === theme ? 'selected' : ''"><span :class="theme + '-icon'"></span></button>
    </li>
  </ul>
</template>

<script lang="ts">
import { mapState, mapMutations } from "vuex";

export default {
  name: "ThemeSelector",
  data() {
    return {
      themes: ['peach', 'lemon', 'coconut', 'cherry', 'watermelon']
    };
  },
  computed: {
    ...mapState("theme", ["themeColor"]),
  },
  methods: {
    ...mapMutations("theme", ["setThemeColor"]),
    changeTheme(theme: string): void {
      this.setThemeColor(theme);
    },
  },
};
</script>
<style lang="scss">
  @import '../styles/variables.scss';

  ul {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    list-style-type: none;

    button {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 10;

      &.selected {
        box-shadow: 0px 0px 0px 5px rgba(247,251,246,0.4);
        -webkit-box-shadow: 0px 0px 0px 5px rgba(247,251,246,0.4);
        -moz-box-shadow: 0px 0px 0px 5px rgba(247,251,246,0.4);
      }

      .peach-icon {
          background: url('../assets/theme-sprite.png') no-repeat 0px 0px;
          background-size: 100px;
          width: 34px;
          height: 34px;
      }
      .lemon-icon {
          background: url('../assets/theme-sprite.png') no-repeat -65px 0px;
          background-size: 100px;
          width: 34px;
          height: 34px;
      }
      .coconut-icon {
          background: url('../assets/theme-sprite.png') no-repeat -33px -31px;
          background-size: 100px;
          width: 34px;
          height: 34px;
      }
      .cherry-icon {
          background: url('../assets/theme-sprite.png') no-repeat 0px -35px;
          background-size: 100px;
          width: 34px;
          height: 34px;
      }
      .watermelon-icon {
          background: url('../assets/theme-sprite.png') no-repeat -33px 1px;
          background-size: 100px;
          width: 34px;
          height: 34px;
      }
    }
  }
</style>