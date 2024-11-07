// import './App.css'

// function App() {
//    return <div>라우터 퀴즈는 모두 App.js에서 작성하셔야 하므로 필요한 소스코드는 txt 파일로 되어있습니다. 해당 코드를 App.js에 복사해서 사용하세요.</div>
// }

// export default App

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Category from './Category'
import NewsList from './NewsList'
import NewsPage from './NewsPage'

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <a href="/">NewsPage</a>
            </li>
            <li>
               <a href="/Category">Category</a>
            </li>
            <li>
               <a href="/NewsList">NewsList</a>
            </li>
         </ul>
         <Routes>
            {/* 이 부분 작성 */}
            <Route path="/" element={<NewsPage />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/NewsList" element={<NewsList />} />
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
