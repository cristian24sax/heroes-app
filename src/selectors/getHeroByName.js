import { heroes } from "../data/heros";

export const getHeroByName = (name='') => {
    return heroes.filter(hero=> hero.superhero.toLowerCase().includes(name))

}