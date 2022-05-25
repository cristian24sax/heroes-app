import React,{useMemo} from 'react'
import { getHerosByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {
    const heroes = useMemo(()=>getHerosByPublisher(publisher),[publisher])
  return (
    <div className='animate__animated animate__pulse'>
   
        {
            heroes.map(hero =>(
                <HeroCard key={hero.id} {...hero} />
            ))
        }
   
    </div>
  )
}
