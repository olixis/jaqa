/**
 * Vuex getters
 */
import { isEmpty } from 'lodash';

// noinspection JSUnusedLocalSymbols
/**
 * @param token
 */
export const isLogged = ({ token }) => !isEmpty(token);

// noinspection JSUnusedLocalSymbols
/**
 * @param user
 */
export const currentUser = ({ user }) => user;
