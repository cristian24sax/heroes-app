import React,{useMemo}from 'react'
import { useParams,Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const navigate =useNavigate()
  const handleReturn=()=>{ 
    navigate(-1)
  }
  const {heroId}=useParams();
  const hero = useMemo(()=>getHeroById(heroId),[heroId])
  if(!hero) return <Navigate to='/'/>
  const imgPath = `/assets/${hero.id}.jpg`
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={imgPath} 
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__bounceInLeft'
          />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3 className='m-3'> {hero.superhero}</h3>
        <ul className="list-group list-group-flush ">
          <li className='list-group-item'><b className='me-2'>Publisher:</b>{hero.publisher}</li>
          <li className='list-group-item'><b className='me-2'>Alter ego:</b>{hero.alter_ego}</li>
          <li className='list-group-item'><b className='me-2'>First appearance:</b>{hero.first_appearance}</li>
          <li className='list-group-item'><b className='me-2'>Characters:</b>{hero.characters}</li>
        </ul>

        <button className='btn btn-outline-info ms-3 mt-4'
                onClick={handleReturn}    
        >
          regresar
        </button>
      </div>
 

    </div>
  )
}
