import { heroes } from "../../data/heros";
import { HeroCard } from "../hero/HeroCard";
export const LandingPage = () => {
    const heros = heroes.sort(()=> {return Math.random() - 0.5});
  return (
    <div className='animate__animated animate__fadeIn'>
        {
            heros.map(hero =>(
                <HeroCard key={hero.id} {...hero} />
            ))
        }
   
    </div>
  )
}