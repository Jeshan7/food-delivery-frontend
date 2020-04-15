const initialState = {
    counter: 10,
    showLoginModal: false
}

const reducer = (state = initialState, action) => {
  
  if( action.type === 'SHOW_MODAL'){
      return {
          ...state,
          showLoginModal: true
      }
  }
  return state;
}

export default reducer;