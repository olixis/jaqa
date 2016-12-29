
/*
 Avoid lazy loading while in dev mode
 to benefit from HMR
 */
// noinspection JSUnusedLocalSymbols
export const RouterLoader = {
  load (name) {
    if (process.env.NODE_ENV === 'development') {
      return require('components/' + name + '.vue')
    }
    else {
      return (resolve) => {
        require('bundle?lazy!components/' + name + '.vue')(resolve)
      }
    }
  }
}
