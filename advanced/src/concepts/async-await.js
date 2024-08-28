import { heroes } from "../data/heroes"

export const asyncAwaitComponent = async( element ) => {
    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f233c9f2425f16916';

    try {
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );
    
        element.innerHTML = `${hero1.name} / ${hero2.name}`
    } catch (error) {
        element.innerHTML = error;
    }

}

const findHero = async( id ) => {
    const hero = heroes.find( hero => hero.id == id);
    if(!hero)
        throw 'Hero not found';
    return hero;
}