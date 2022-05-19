import { heroes } from "../data/heros"


export const getHerosByPublisher=(publisher)=>{
    const validPublisher=['DC Comics','Marvel Comics']
    if (!validPublisher.includes(publisher)){
        throw new console.error(`${publisher} is not valid a publisher`);
    }
    return heroes.filter(hero=> hero.publisher===publisher)
}