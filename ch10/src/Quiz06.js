import styled, { keyframes } from 'styled-components'

const move = keyframes`
      
      0% {
         transform: translateX(0); /* 시작 지점 */
      }
      50% {
         transform: translateX(100px); /* 오른쪽으로 100px 이동 */
      }
      100% {
         transform: translateX(0); /* 다시 원래 위치로 */
      }
   
`

const Ball = styled.div`
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
   animation: ${move} 2s infinite;
`

function Quiz06() {
   return <Ball />
}

export default Quiz06
