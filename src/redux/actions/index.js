let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const setDinamis = (name,json) => ({
  type: 'SET_DINAMIS',
  name,
  json
})
export const filterDinamis = (name,json) =>{
  const  data=json.filter(s=>s.name===name)
  if(data.length===0){
    return []
  }
  else{
    return data[0].json
  }
}
export const setLocalStorage = (name,data) => ({
  type: 'set_localstorage',
  name,
  data
});
export const getLocalStorage = (name) =>{
  return localStorage.getItem(name)
};
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
