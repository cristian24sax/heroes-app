import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

export const LoginScreen = () => {
  const navigate=useNavigate()
  const  {dispatch } = useContext(AuthContext)
  
  const [Values, handleInputChange]=useForm({
    nick:""
  })
  const {nick} = Values
  const handleSubmit = (e)=>{
    console.log('mandando');
    e.preventDefault()
  }
  const handleLogin=()=>{
    const action = { 
      type:types.login,
      payload:{
        name:nick,
      }
    }
    dispatch(action)
    const lastPath= localStorage.getItem('lastPath')||'/'
    navigate(lastPath,{
      replace:true
    })
  }
  return (
    <div className='container mt-5'>
      <h1>
        LoginScreen
      </h1>
      <hr/>

     <form  onSubmit={handleSubmit} className="mb-4">
         <input 
          type='text'
          name='nick'
          className='form-control mt-3'
          placeholder='Ingrese nick'
          autoComplete='off'
          value={nick}
          onChange={handleInputChange}
        />
      <button
        className='btn btn-primary mt-3'
        onClick={handleLogin}
      >
        login
      </button>
    </form> 
    </div>
  )
}
