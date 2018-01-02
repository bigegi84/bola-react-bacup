const LocalStorage=(state = [], action) => {
  switch (action.type) {
    case 'set_localstorage':
      localStorage.setItem(action.name,action.data);
      return state;
    default:
      return state
  }
};
export default LocalStorage