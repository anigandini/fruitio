import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({ namespaced: true, name: "theme" })
class ThemeModule extends VuexModule {
  themeColor = "coconut";

  @Mutation
  setThemeColor(palette: string): void {
    this.themeColor = palette;
  }

  async changeThemeColor(newColor: string): Promise<void> {
    this.context.commit("setThemeColor", newColor);
  }
}

export default ThemeModule;