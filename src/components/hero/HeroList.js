import React from 'react'
import { getHerosByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {
    const heroes = getHerosByPublisher(publisher)
  return (
    <div>
   
        {
            heroes.map(hero =>(
                <HeroCard key={hero.id} {...hero} />
            ))
        }
   
    </div>
  )
}
