import { useState, useEffect } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';


export const HeroList = ({ publisher }) => {
    const [heroes, setHeroes] = useState([]);
    const fetchData = () => {
        const heroesList = getHeroesByPublisher(publisher);
        setHeroes(heroesList);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </>
    )
}
