import React, { useState, useCallback } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = useCallback((event) => {
      setText(event.target.value)
   }, [])

   const handleSubmit = useCallback(
      (event) => {
         event.preventDefault() // 서버에 전송하는 것을 막아준다
         setItems([...items, text])
         setText('')
      },
      [items, text] //item와 text state를 함수 내부에서 read해서 사용하므로
   )

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">추가</button>
         </form>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz02_1
