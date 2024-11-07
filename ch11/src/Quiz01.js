import React, { useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
function reducer(state, action) {
   // state: 현재 state값(todos)
   // action: dispath에서 전달한 매개변수 값 =>{type:'add' , payload: inputValue}

   switch (action.type) {
      case 'add':
         // ...state를 사용해서 기존의 데이터를 계속 유지해야 한다. 깊은 복사
         return [...state, { id: action.id, text: action.text }]
      // return [...state, {id: Date.now(),text:action.payload}]
      // 여기에 코드 작성
      case 'delete': // 삭제할때 action =>{type: 'delete', payload:id}
         return state.filter((todo) => todo.id !== action.id)
      // return state.filter((todo) => todo.id !== action.payload)
      // 여기에 코드 작성
      default:
         return state
   }
}

const Quiz01 = () => {
   const [todos, dispatch] = useReducer(reducer, initialState)
   const [inputValue, setInputValue] = useState('')
   const [number, setNumber] = useState(0)

   // 새로운 할 일 추가
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         //.trim() 양옆의 공백 제거 함수
         //여기에 코드 작성
         // dispath 사용시 데이터를 2개이상 전달할 경우 json객체로 전달
         // dispath의 역할: action전달, reducer 호출
         dispatch({ type: 'add', text: inputValue, id: number })
         // dispatch({type:'add' , payload: inputValue})
         setNumber(number + 1)
         setInputValue('')
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      //여기에 코드 작성
      dispatch({ type: 'delete', id })
      // dispatch({ type: 'delete', payload: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz01
