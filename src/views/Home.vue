<template>
  <main class="home" :class="themeColor">
      <div class="can" alt="Fruitio can"></div>
      <h1>SIP, SAVOR,<br>SMILE.</h1>
      <button class="call-to-act">TASTE FRESHNESS</button>
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
  @import "../styles/variables.scss";

  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	  width: 100%;
    background-image: url('../assets/patterns-sprite-mobile.png');
    background-repeat: no-repeat;

    .can {
      background-image: url('../assets/can-sprite-mobile.png');
      background-repeat: no-repeat;
      width: 329px;
      height: 491px;
      transform: scale(0.9);
    }

    .call-to-act {
      width: 70%;
      height: 5%;
      border: none;
      border-radius: 40px;
      padding: 5px;
    }
    
    &.cherry {
      background-position: -998px -263px;

      .can {
        background-position: -11px -765px;
      }
    }

    &.coconut {
      @include isTheme('coconut');

      background-position: -1492px -163px;
      
      .can {
        background-position: -361px -764px;
      }
    }

    &.lemon {
      background-position: -504px -139px;

      .can {
        background-position: -573px -88px;
        width: 335px;
        height: 500px;
      }
    }

    &.peach {
      background-position: -1986px -204px;

      .can {
        background-position:-998px -10px;
        width: 331px;
        height: 493px;
      }
    }

    &.watermelon {
      background-position: -10px -159px;
      
      .can {
        background-position: -80px -90px;
        width: 340px;
	      height: 505px;
      }
    }

    .to-bottom {
      align-self: flex-end;
      position: absolute;
      bottom: 0;
    }

    @media screen and (min-width: 768px){
      section {
        height: 50vh;
      }
    }
  }
</style>