import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { heroes } from "../../data/heros";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";
import { SearchScreen } from "../search/SearchScreen";
export const LandingPage = () => {
    
    const [query]=useSearchParams()
    const search = query.get('search')
    const heros = heroes.sort(()=> {return Math.random() - 0.5});
    const heroFilted = useMemo(() => getHeroByName(search), [search]); 
  return (
    <div className='animate__animated animate__fadeIn'>
        <h1 className="text-center m-3"> HEROES</h1>
        <SearchScreen/>
        
        {heroFilted.length===0?
                  heros.map(hero =>(
                    <HeroCard key={hero.id} {...hero} />       
                  ))  
        : 
            heroFilted.map(hero =>(
                <HeroCard key={hero.id} {...hero} />
            ))}
    </div>
  )
}