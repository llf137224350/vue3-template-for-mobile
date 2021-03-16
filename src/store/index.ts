import { createStore } from 'vuex';
import GlobalStoreModules from '../../types/GlobalStoreModules';
import user from '@/store/user';
export default createStore<GlobalStoreModules>({
  modules: {
    user
  }
});
