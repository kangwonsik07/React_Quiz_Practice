import styled from 'styled-components'

// const StyledInput = styled.input.attrs({ type: 'radio' })`
const StyledInput = styled.input`
   background-color: skyblue;
   height: 20px;
   widht: 100px;
` // 여기에 코드 작성
const StyledInput2 = styled(StyledInput)`
   background-color: white;
` // 여기에 코드 작성

function Quiz01() {
   return (
      <div>
         <StyledInput></StyledInput>
         <StyledInput2></StyledInput2>
      </div>
   )
}

export default Quiz01
