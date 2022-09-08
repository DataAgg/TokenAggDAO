import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  persist: {
    storage: localStorage,
    paths: ['appStore'],
  },
  state: () => ({
    _locale: "zh-CN",
		_dark: false,
  }),
  getters: {
    locale: state => state._locale,
    dark: state => state._dark
  },
  actions: {
    upDark(data:boolean) {
      this._dark = data;
    },
		upLocale(lang:string){
			this._locale = lang;
		},
  }
});
