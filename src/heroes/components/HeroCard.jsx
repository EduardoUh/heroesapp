import { Link } from 'react-router-dom';


export const HeroCard = ({ id, superhero, publisher, alter_ego: alterEgo, first_appearance: firstAppearance, characters }) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`/heroes/${id}.jpg`} alt={superhero} className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alterEgo}</p>
                            {
                                alterEgo !== characters && (<p>{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-muted">{firstAppearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                See more...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
