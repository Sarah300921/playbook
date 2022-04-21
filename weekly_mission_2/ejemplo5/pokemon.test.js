// JavaScript source code
import Pokemon from './pokemon.js'

test('Test1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Charmander','fuego')
    expect(myPokemon.type).toBe('fuego'); // Corrige esta prueba
});