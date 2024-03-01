import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selsect, setSelect] = useState('')

  const handleName = e => {
    setName(e.target.value)
  }
  const handlEmail = e => {
    setEmail(e.target.value)
  }
  const handlPhone = e => {
    setPhone(e.target.value)
  }
  const handleSelect = e => {
    setSelect(e.target.value)
  }

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      education: selsect
    }

    try {
     const res = axios.post('http://localhost:8000/user/userDetails', data)
     console.log(res);
     
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='wrapper'>
        <div className='inputs'>
          <label htmlFor=''>name :</label>
          <input onChange={handleName} id='name' type='text' />
        </div>
        <div className='inputs'>
          <label htmlFor=''>email :</label>
          <input onChange={handlEmail} id='email' type='text' />
        </div>
        <div className='inputs'>
          <label htmlFor=''>phone :</label>
          <input onChange={handlPhone} id='phone' type='text' />
        </div>
        <div className='inputs'>
          <label htmlFor=''>Educatonal background :</label>

          <select onChange={handleSelect}>
            <option id='education'>diploma</option>
            <option id='education'>degree</option>
            <option id='education'>pg</option>
            <option id='education'>engineering</option>
          </select>
        </div>
        <div className='btnWrapper'>
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
    </>
  )
}

export default App
