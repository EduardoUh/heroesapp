import { heroes } from '../';


export const getHeroesByName = (name = '') => {
    name = name.trim().toLocaleLowerCase();
    if (!name) {
        return [];
    }
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
}
