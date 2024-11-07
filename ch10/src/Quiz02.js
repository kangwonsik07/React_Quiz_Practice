import styled from 'styled-components'

const Button = styled.button`
   background-color: ${(props) => props.color || 'gray'};
   color: white;
   padding: 5px;
   border-radius: 5px;

   /* 여기에 코드 작성 */
`

function Quiz02() {
   return (
      <div>
         <Button color="blue">Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02
