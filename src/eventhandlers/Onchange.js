import React,{useState} from 'react'

export default function Onchange() {

  const [user,setUser] = useState("")

  const onChangeHandler = event => {
    setUser(event.target.value)
  }
  return (
    <div>
      <h1>onChange Event Handler Method</h1>
      <p>By Using useState Hook Function</p>

      <input type='text' placeholder='username' value={user} name='user' onChange={onChangeHandler} />

      <br/>

      {user}
      
    </div>
  )
}
