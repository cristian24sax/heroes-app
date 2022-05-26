import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = () => {
  const navigate=useNavigate()
  const  {dispatch } = useContext(AuthContext)
  const handleLogin=()=>{
    const action = { 
      type:types.login,
      payload:{
        name:'cristian',
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

     {/* <form  onSubmit={handleSubmit}>
         <input 
          type='text'
          name='search'
          className='form-control mt-3'
          placeholder='Buscar'
          autoComplete='off'
          value={search}
          onChange={handleInputChange}
        />
    </form> */}
      <button
        className='btn btn-primary'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
