import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selsect, setSelect] = useState('')
  const [value, setValue] = useState([])

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

  const handleSubmit = async () => {
    if (name !== '' && email !== '' && phone !== '' && selsect !== '') {
      const data = {
        name: name,
        email: email,
        phone: phone,
        education: selsect
      }

      try {
        const res = await axios.post(
          'http://localhost:8000/user/userDetails',
          data
        )

        setValue(preve => [...preve, res.data])
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('enter all field')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/user/getData')

        setValue(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

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

      <div className='tablewrapper'>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>
              education
            </th>
          </tr>
          {value.length> 0 && value.map(item => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {item.name}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {item.email}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {item.education}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default App
