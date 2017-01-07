/**
 * Vuex actions
 */
/**
 * @param context
 * @param payload
 */
export const attemptLogin = (context, payload) => {
  console.log(payload);
  context.commit('setToken', 'xxx');
};
