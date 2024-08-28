import { heroes } from "../data/heroes"

export const asyncComponent = ( element ) => {
    const id1 = '5d86371f233c9f2425f16916';
    console.log('Inicio de componente')
    
    findHero( id1 )
        .then( console.log) 
        .catch( error => element.innerHTML = error) 

    console.log( findHero( id1 ))


}

const findHero = async( id ) => {
    const hero = heroes.find( hero => hero.id === id);

    return hero?.name;
}