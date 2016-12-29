/**
 * Vuex actions
 */
import * as types from '../types';

// noinspection JSUnusedLocalSymbols
/**
 * @param context
 * @param payload
 */
export const setLeadUserEmail = (context, payload) => {
  context.commit(types.setLeadUserEmail, payload);
};
