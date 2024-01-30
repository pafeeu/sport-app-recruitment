import './Home.css';
import React, {useState} from "react";
import MatchRow from "../components/MatchRow.tsx";
import GrayHeading from "../components/GrayHeading.tsx";
import {getGames} from "../api.ts";
import OutsideContainer from "../components/OutsideContainer.tsx";
import Header from "../components/Header.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGreaterThan, faLessThan} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container.tsx";
import {useQuery} from "@tanstack/react-query";

function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const query = useQuery({
        queryKey: ['table',currentPage],
        queryFn: async () => {
            const response = await getGames(currentPage, 12, 'asc', 'date');
            response.data.forEach((game) => {
                game._date_object = new Date(game.date);
            });
            return response;
        }
    });
    const nextPage = () => {
        if (query.isSuccess && currentPage + 1 <= query.data.pages)
            setCurrentPage(prev => prev + 1);
    }
    const prevPage = () => {
        if (query.isSuccess && currentPage >= 1)
            setCurrentPage(prev => prev - 1);
    }

    // const [response, setResponse] = useState<GamesResponse>();
    // useEffect(() => {
    //     getGames(currentPage, 12, 'asc', 'date')
    //         .then((response: GamesResponse) => {
    //             response.data.forEach((game) => {
    //                 game._date_object = new Date(game.date);
    //             });
    //             response.data.sort((a, b) => a._date_object !== b._date_object ? (a._date_object > b._date_object ? 1 : -1) : a.round - b.round);
    //             // console.log(list.filter((game, index, arr) => (index >= 1 && arr[index - 1].round !== game.round && arr[index - 1].date === game.date)));
    //             setResponse(response);
    //         });
    // }, [currentPage]);

    return (<>
        <OutsideContainer>
            <Container>
                <button className={'button has-text-white is-half-rounded'}
                        style={{backgroundColor: '#1c336c'}}>Wszystkie
                </button>
                <hr className={'m-0'}/>
                <Header/>
                <div className={'pb-2'}>

                    {query.isPending ? (
                        <p>Data is loading...</p>
                    ) : query.isError ? (
                        <p>{query.error.message}</p>
                    ) : query.data.data.length ? (
                        query.data?.data.map((game, index, arr) => {
                            return (
                                <React.Fragment key={game.id}>
                                    {(index === 0 || arr[index - 1].round !== game.round) ?
                                        <GrayHeading>RUNDA {game.round}</GrayHeading> : <hr className={'m-0'}/>}
                                    <MatchRow game={game}/>
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <p>No data.</p>
                    )}
                </div>
            </Container>
            <div className={'has-text-weight-medium mt-5'}>
                <button className={'button pagination-button'} onClick={prevPage}
                        disabled={currentPage === 1}>
                    <FontAwesomeIcon color={'var(--icon-color)'} size={'xs'} className={'mx-4'} icon={faLessThan}/>
                    Wstecz
                </button>
                <button className={'button pagination-button is-pulled-right'} onClick={nextPage}
                        disabled={currentPage === query.data?.pages}>
                    Dalej
                    <FontAwesomeIcon color={'var(--icon-color)'} size={'xs'} className={'mx-4'} icon={faGreaterThan}/>
                </button>
            </div>
        </OutsideContainer>
    </>);
}

export default Home;