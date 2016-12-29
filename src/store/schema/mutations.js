/**
 * Vuex mutations
 */
import * as types from '../types';

export default {
  /**
   * @param state
   * @param name
   */
  [types.setAppName] (state, name) {
    state.app.name = name;
  },
  /**
   * @param state
   * @param title
   */
  [types.setAppTitle] (state, title) {
    state.app.title = title;
  },
  /**
   * @param state
   * @param menu
   */
  [types.setAppMenu] (state, menu) {
    state.app.menu = menu;
  }
}
