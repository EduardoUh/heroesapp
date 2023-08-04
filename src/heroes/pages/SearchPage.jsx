// I used useLocation because useParams hook does not retrieve the query params
import { useNavigate, useLocation } from 'react-router-dom';
// npm package to parse the params
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../';
import { getHeroesByName } from '../';


export const SearchPage = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    // taking the query param and if it is undefines then its value will be empty string
    const { q = '' } = queryString.parse(search);
    const heroes = getHeroesByName(q);
    const { searchText, handleInputChange } = useForm({ searchText: q });
    // fetching the data

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }
    return (
        <>
            <h1>
                Search
            </h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary mt-3">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        !q &&
                        (<div className="alert alert-primary text-center animate__animated animate__fadeInRight">
                            Use the form to search a hero
                        </div>)
                    }
                    {
                        !heroes.length && q &&
                        (<div className="alert alert-danger text-center animate__animated animate__fadeInRight">
                            No heroes matched <b>{q}</b>
                        </div>)
                    }
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>

    )
}
