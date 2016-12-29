/**
 * Vuex mutations
 */
import * as types from '../types';

export default {
  /**
   * @param state
   * @param leadUserEmail
   */
  [types.setLeadUserEmail] (state, leadUserEmail) {
    state.leadUserEmail = leadUserEmail;
  }
}
