/**
 * Vuex actions
 */
import * as types from '../types';

// noinspection JSUnusedLocalSymbols
/**
 * @param context
 * @param payload
 */
export const changeTitle = (context, payload) => {
  context.commit(types.setAppTitle, payload);
};

// noinspection JSUnusedLocalSymbols
/**
 * @param context
 * @param payload
 */
export const changeMenu = (context, payload) => {
  context.commit(types.setAppMenu, payload);
};
