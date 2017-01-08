import Vue from 'vue';
import Vuex from 'vuex';

import state from './schema/state';
import mutations from './schema/mutations';

import * as actions from './schema/actions';
import * as getters from './schema/getters';

import modules from './schema/modules';

Vue.use(Vuex);

export default new Vuex.Store({ state, mutations, actions, getters, modules });
