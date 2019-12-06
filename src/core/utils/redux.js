const createReducer = (initialState, actions) => (state = initialState, action) => {
  if (action.type === '@@RESET') {
    return initialState
  }

  const reducer = actions[action.type]

  return reducer ? reducer(state, action) : state
}

export default createReducer
