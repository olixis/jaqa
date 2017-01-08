
/*
 Avoid lazy loading while in dev mode
 to benefit from HMR
 */
// noinspection JSUnusedLocalSymbols
export const RouterLoader = {
  load (name) {
    console.log(name);
    // noinspection JSUnresolvedVariable, ES6ModulesDependencies
    if (process.env.NODE_ENV === 'development') {
      // noinspection JSUnresolvedFunction
      return require('components/' + name + '.vue')
    }
    else {
      return (resolve) => {
        // noinspection JSUnresolvedFunction
        require('bundle?lazy!components/' + name + '.vue')(resolve)
      }
    }
  }
};
