import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import casual from 'casual-browserify'
const AddUserInfor = (props) => {
  const { handleAddNewUser } = props
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  useEffect(() => {}, [])

  return (
    <div>
      Todolist <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mx-3">Your name</Form.Label>
        <Form.Control
          type="text"
          style={{ width: '300px', display: 'inline-block' }}
          placeholder=""
          value={a}
          onChange={(e) => {
            setA(e.target.value)
          }}
        />
      </Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mx-3">Your age</Form.Label>
        <Form.Control
          type="text"
          style={{ width: '300px', display: 'inline-block' }}
          placeholder=""
          value={b}
          onChange={(e) => {
            setB(e.target.value)
          }}
        />
      </Form.Group>
      <Button
        variant="primary"
        size=""
        className="mx-3"
        onClick={() => {
          handleAddNewUser({ id: casual.uuid, name: a, age: b })
          setA('')
          setB('')
          document.title = 'who are you'
					// console.log('giá trị a, b', a , b) 
        }}>
        Submit
      </Button>
    </div>
  )
}

export default AddUserInfor
