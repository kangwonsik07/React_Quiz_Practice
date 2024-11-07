// import './App.css'

// function App() {
//    return <div>라우터 퀴즈는 모두 App.js에서 작성하셔야 하므로 필요한 소스코드는 txt 파일로 되어있습니다. 해당 코드를 App.js에 복사해서 사용하세요.</div>
// }

// export default App

import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Category from './Category'
import NewsList from './NewsList'
import NewsPage from './NewsPage'
import NewsList2 from './NewsList2'

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">NewsPage</NavLink>
            </li>
            <li>
               <NavLink to="/Category">Category</NavLink>
            </li>
            <li>
               <NavLink to="/NewsList">NewsList</NavLink>
            </li>
         </ul>
         <Routes>
            {/* 이 부분 작성 */}
            <Route path="/" element={<NewsPage />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/NewsList" element={<NewsList2 />} />
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
