import Vue from "vue";
import Vuex from "vuex";
import ThemeModule from "./modules/theme";

Vue.use(Vuex);

const store = new Vuex.Store({});
store.registerModule("theme", ThemeModule);

export default store;