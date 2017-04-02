import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import {
    log,
} from '../js/function';

Vue.use(Vuex);

const state = {
    user: 'visiter',
    loading: false,
};
const myPlugin = (store) => {
    log('store created');
    store.subscribe((mutation, state) => {
        log(mutation);
    });
};
const store = new Vuex.Store({
    plugins: [myPlugin],
    state,
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production',
});
if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations',
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations'),
        });
    });
}
export default store;
