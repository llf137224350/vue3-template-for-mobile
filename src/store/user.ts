import { Module } from 'vuex';
import GlobalStoreModules from '../../types/GlobalStoreModules';
import UserState from '../../types/UserState';
const user: Module<UserState, GlobalStoreModules> = {
  state: {
    user: {
      userName: '狂奔的蜗牛'
    }
  },
  mutations: {},
  actions: {}
};
export default user;
