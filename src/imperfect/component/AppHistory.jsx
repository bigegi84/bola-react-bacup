import {createHashHistory,createBrowserHistory} from 'history'
// const hashHistory=createHashHistory({
//   hashType: 'slash' // the default
// });
// export default hashHistory
const browserHistory=createBrowserHistory({
  basename:"", // The base URL of the app (see below)
  forceRefresh:false, // Set true to force full page refreshes
  keyLength:6,
});
export default browserHistory