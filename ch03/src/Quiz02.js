import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import React, { useState } from 'react'

function Quiz02() {
   const [poket, setPoket] = useState('이상해씨')
   const [pic, setPic] = useState(true)

   return (
      <div>
         <img src={step1} width="150" style={{ display: pic ? 'block' : 'none' }} />

         <br />
         <img src={step2} width="150" style={{ display: pic ? 'none' : 'block' }} />
         <br />
         <p>{poket}</p>
         <button
            onClick={() => {
               setPoket('이상해풀')
               setPic(false)
            }}
         >
            이상해씨 다음은?
         </button>
      </div>
   )
}

export default Quiz02
