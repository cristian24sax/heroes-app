import React from 'react'
import { useSearchParams } from 'react-router-dom'
// import { useForm } from '../../hooks/useForm'
// import { getHeroByName } from '../../selectors/getHeroByName'

export const SearchScreen = () => {
  // const [values,handleInputChange,reset] =useForm({
  // search:''
  // })
  // const {search} = values
  const [query, setQuery]=useSearchParams()
  const search=query.get("search")
  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(search)
    // reset()
  }
  // const getHero = getHeroByName('asdasd')
  return (
    // <form  onSubmit={handleSubmit}>
    //     <input 
    //       type='text'
    //       name='search'
    //       className='form-control mt-3'
    //       placeholder='Buscar'
    //       autoComplete='off'
    //       value={search}
    //       onChange={handleInputChange}
    //     />
    // </form>
    <form  onSubmit={handleSubmit}>
      <input 
        type='text'
        name='search'
        className='form-control mt-3'
        placeholder='Buscar'
        autoComplete='off'
        value={search ?? ""}
        onChange={e=>{
          const value= e.target.value;
          setQuery({search:value})
        }}
      />
</form>
  )
}
