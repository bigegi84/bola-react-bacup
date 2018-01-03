

const Dinamis=(
  state={

  },
  action) => {
  switch (action.type) {
    case 'SET_DINAMIS':
      const one=state.filter(s=>s.name===action.name)
      if(one.length===0){
        return [
          ...state,
          {
            name: action.name,
            json: action.json
          }
        ]
      }
      else {
        const update = state.map(item => {
          if (item.name === action.name) {
            return {...item, json:action.json}
          }
          return item
        });
        return update
      }
    default:
      return state
  }
}

export default Dinamis