import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])
   const [inputText, setInputTetxt] = useState('')
   const [nextId, setNextId] = useState(3)
   const [selectvalue, setSelectValue] = useState('미완료')

   const projectsText = projects.map((project) => (
      <li key={project.id} onDoubleClick={() => onRemove(project.id)}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))

   const onRemove = (id) => {
      const delNames = projects.filter((project) => {
         return project.id !== id
      })
      setProjects(delNames)
   }

   const onChange1 = (e) => setInputTetxt(e.target.value)
   const onChange2 = (e) => setSelectValue(e.target.value)

   const onClick = () => {
      const nextText = projects.concat({
         id: nextId,
         name: inputText,
         status: selectvalue,
      })
      setProjects(nextText)
      setNextId(nextId + 1)
      setInputTetxt('')
      setSelectValue('미완료')
   }

   return (
      <>
         <input value={inputText} onChange={onChange1} placeholder="프로젝트 이름"></input>
         <select value={selectvalue} onChange={onChange2}>
            <option>미완료</option>
            <option>완료</option>
         </select>
         <button onClick={onClick}>추가</button>
         <ul>{projectsText}</ul>
      </>
   )
}

export default Quiz02
