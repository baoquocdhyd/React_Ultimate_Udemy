import { useState, useEffect } from "react";
const DisplayInfor = (props) => {
  const { a, handleDeleteUser } = props
  useEffect(() => {
    setTimeout(() => {
      document.title = 'who are you'
    }, 3000)
  }, [])
  useEffect(() => {
    if (a.length===0) {alert('đã hết dữ liệu')}
  }, [a])

  return (
    <div>
      {a.map((i, j) => {
        return (
          <div key={j} className={+i.age > 27 ? 'red' : 'green'}>
            <div>- name: {i.name}</div>
            <div style={{display: 'inline-block' , paddingRight: '5px' }} >- age: {i.age}</div>
            <i className="fa-solid fa-square-xmark" 
						style={{ color: 'lightBlue', fontSize: '20px' }}
						onClick = {() => {handleDeleteUser(i.id)} } 
						></i>
          </div>
        )
      })}
      <div style={{ color: 'red', fontSize: '20px' }}></div>
    </div>
  )
}

export default DisplayInfor
