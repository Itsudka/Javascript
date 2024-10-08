import { heroes } from "../data/heroes"

export const promiseComponent = ( element ) => {
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `<h3>${error} </h3>`;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${ hero1.name}</h3>
            <h3>${ hero2.name}</h3>
        `
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f2343e37870b91ef1';

    let hero1, hero2;

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2) )
    .catch( renderError);

    //! Forma 2 

    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHeroes( hero1, hero2)
    //     })
    //     .catch( error => renderError(error));


    //! Forma 1
    // findHero(id1)
    //     .then( (hero) => {
    //         hero1 = hero;

    //         findHero( id2 )
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //         });
    //     })
    //     .catch( error => renderError(error));


}
const findHero = (id) => {

    return new Promise( ( resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id);

        if( hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`)

    });





}