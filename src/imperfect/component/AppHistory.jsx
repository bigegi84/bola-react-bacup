import {createHashHistory} from 'history'
const hashHistory = createHashHistory({
  hashType: 'slash' // the default
});
export default hashHistory