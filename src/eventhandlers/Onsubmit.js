import React ,{useState}from 'react'

export default function Onsubmit() {

  const [data,setData] = useState( {
    username: '',
    password: '',
  })

  const {username,password} = data 
  const onChange = event => {
    setData({...data,[event.target.name]:[event.target.value]})
  }

  const submithandler = event => {
    event.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <h1>onSubmit Event Handler Method</h1>
      <form onSubmit={submithandler}>
        <input type='text' name="username" value={username} onChange={onChange} placeholder='Username' /> <br/>
        <input type='password' name='password' value={password} onChange={onChange} placeholder='Password'/><br/>
        <input type='submit' name='submit'/>
      </form>
    </div>
  )
}
