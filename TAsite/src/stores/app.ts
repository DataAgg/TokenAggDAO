import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  persist: {
    storage: localStorage,
    paths: ['appStore'],
  },
  state: () => ({
    locale: "zh-CN",
		isDark: false,
  }),
  getters: {
    locale: state => state.locale,
    dark: state => state.isDark
  },
  actions: {
    upDark(data:boolean) {
      this.isDark = data;
    },
		upLocale(lang:string){
			this.locale = lang;
		},
  }
});
