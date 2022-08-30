import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import casual from 'casual-browserify'
const Todolist = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState([])
  useEffect(() => {}, [])
  console.log('giá trị state', a)
  return (
    <div>
      Todolist <br />
      <Form.Label className="mx-3" column="lg" lg={7}></Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        value={a}
        onChange={(e) => {
          setA(e.target.value)
        }}
        onScroll={(e) => {
          console.log('giá trị state "enter"', a)
        }}
        onKeyUp={(e) => {
          switch (e.key) {
            case 'Enter':
              setB([...b, { id: casual.uuid, value: a }])
              setA('')

              break
          }
        }}
        style={{ width: '300px', display: 'inline-block' }}
      />
      <Button
        variant="primary"
        size=""
        className="mx-3"
        onClick={() => {
          setB([...b, { id: casual.uuid, value: a }])
          setA('')
        }}>
        Submit
      </Button>
      <br />
      <div>
        {b.map((a, c) => {
          return (
            <div
              key={a.id}
              style={{ textAlign: 'left' }}
              onClick={() => {
                setB([
                  ...b.filter((m) => {
                    return m.id !== a.id
                  }),
                ])
              }}>
              {a.value}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Todolist
