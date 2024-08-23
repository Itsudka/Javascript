


export const pedirCarta = (deck) => {


    if ( !deck || deck === 0 ) {
        throw new Error( 'No hay cartas en el deck');
    }

    const carta = deck.pop();
    return carta;
}