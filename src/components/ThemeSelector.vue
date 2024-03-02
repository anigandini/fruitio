<template>
  <section >
    <ul  :class="'wave-' + themeColor">
      <li v-for="theme, index in themes" :key="index">
        <button @click="changeTheme(theme)" :class="themeColor === theme ? 'selected' : ''"><span :class="theme + '-icon'"></span></button>
      </li>
    </ul>
  </section>
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

  section {
    width: 100vw;
    height: 199px;
    overflow: hidden;

    .wave-coconut {
        background: url('../assets/waves-sprite.png') no-repeat -10px -294px;
      }

      .wave-peach {
        background: url('../assets/waves-sprite.png') no-repeat -10px -46px;
      }

      .wave-lemon {
        background: url('../assets/waves-sprite.png') no-repeat -504px -35px;
      }

      .wave-cherry {
        background: url('../assets/waves-sprite.png') no-repeat -504px -280px;
      }

      .wave-watermelon {
        background: url('../assets/waves-sprite.png') no-repeat -10px -520px;
        position: relative;
        bottom: 0;
      }

    ul {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 0.5rem;
    width: 100%;
    height: 200px;
    list-style-type: none;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    
   

      li {
        padding-bottom: 2rem;
      }

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
  
  }
</style>