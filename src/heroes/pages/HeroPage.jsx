import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../';


export const HeroPage = React.memo(() => {
    const [hero, setHero] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchData = () => {
        const heroInfo = getHeroById(id);
        setHero(heroInfo);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleNavigateBack = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img
                    src={`/heroes/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.pusblisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">
                    Characters
                </h5>
                <p>{hero.characters}</p>
                <button
                    className="btn btn-outline-primary animate__animated animate__bounce"
                    onClick={handleNavigateBack}
                >
                    Back
                </button>
            </div>
        </div>
    )
})
