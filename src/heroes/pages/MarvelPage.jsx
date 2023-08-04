import { HeroList } from '../components';


export const MarvelPage = () => {
    return (
        <>
            <h2 className="text-center">Marvel Page</h2>
            <hr />
            <HeroList publisher='Marvel Comics' />
        </>
    )
}
