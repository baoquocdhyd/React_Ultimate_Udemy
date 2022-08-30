import { useState } from 'react'
import DisplayInfor from './DisplayInfor.js'
import AddUserInfor from './AddUserInfor.js'
import pic1 from '../assets/477174418.jpg'



const MyComponent = () => {
  const [a, setA] = useState([
    { id: 1, name: 'A', age: '16' },
    { id: 2, name: 'B', age: '26' },
    { id: 3, name: 'C', age: '69' },
  ])
  const handleAddNewUser = (obj) => {
    setA([...a, obj])
  }
  const handleDeleteUser = (i) => {
    setA([...a.filter((j) => {return(j.id!==i)} )])
    
  }
  return (
    <div>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <DisplayInfor a={a} handleDeleteUser={handleDeleteUser} />
    
    </div>
  )
}

export default MyComponent
