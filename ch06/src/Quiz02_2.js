import React, { useMemo } from 'react'

const Quiz02_1 = ({ numbers }) => {
   // numbers=[0,1,2,3]
   // filter, reduce 사용하여 홀수만 필터링하고 그 합계를 계산한 후 useMemo로 처리합니다.
   // const oddSum = () => {
   //    return numbers.filter((num) => num % 2 !== 0).reduce((a, b) => a + b)
   // }

   const oddSum = useMemo(() => {
      return numbers.filter((num) => num % 2 !== 0).reduce((a, b) => a + b)
   }, [numbers])

   //props인 number가 바뀔때만 함수 실행

   // const oddSumResult = useMemo(() => oddSum(), [numbers])

   // console.log(oddSum())

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계: {/* 여기에 결과를 출력하세요 */ oddSum}</p>
      </div>
   )
}

export default Quiz02_1
