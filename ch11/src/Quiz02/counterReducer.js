const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   switch (action.type) {
      case 'increment':
         return {
            ...state,
            count: state.count + 1,
         }
      // 여기에 코드 작성(숫자를 감소 시킴)
      case 'decrement':
         return {
            ...state,
            count: state.count - 1,
         }
      // 여기에 코드 작성(숫자를 증가 시킴)
      default:
         return state
   }
}

export default counterReducer
