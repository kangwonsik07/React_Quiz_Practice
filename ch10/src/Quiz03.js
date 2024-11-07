import styled from 'styled-components'

const Card = styled.div`
   border: 1px solid black;

   &:hover {
      border: 1px solid red;
   }
   /* 여기에 코드 작성 */
`

function Quiz03() {
   return <Card>Hover me!</Card>
}
export default Quiz03
