import './Home.css';
import {useEffect, useState} from "react";
import {GamesResponse} from '../types.ts';
import MatchRow from "../components/MatchRow.tsx";
import GrayHeading from "../components/GrayHeading.tsx";
import React from "react";
import {getGames} from "../api.ts";
import OutsideContainer from "../components/OutsideContainer.tsx";
import Header from "../components/Header.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGreaterThan, faLessThan} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container.tsx";

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const changePage = (change: number) => {
        if(!response) return;
        if(currentPage + change < 1 || currentPage + change > response.pages) return;
        setCurrentPage(currentPage + change);
    };

    const [response, setResponse] = useState<GamesResponse>();
    useEffect(() => {
        getGames(currentPage, 12, 'asc', 'date')
            .then((response: GamesResponse) => {
                response.data.forEach((game) => {
                    game._date_object = new Date(game.date);
                });
                response.data.sort((a, b) => a._date_object !== b._date_object ? (a._date_object > b._date_object ? 1 : -1) : a.round - b.round);
                // console.log(list.filter((game, index, arr) => (index >= 1 && arr[index - 1].round !== game.round && arr[index - 1].date === game.date)));
                setResponse(response);
            });
    }, [currentPage]);

    return (<>
        <OutsideContainer>
            <Container>
                <button className={'button has-text-white is-half-rounded'}
                        style={{backgroundColor: '#1c336c'}}>Wszystkie
                </button>
                <hr className={'m-0'}/>
                <Header/>
                <div className={'pb-2'}>
                    {response?.data.map((game, index, arr) => {
                        return (
                            <React.Fragment key={game.id}>
                                {(index === 0 || arr[index - 1].round !== game.round) ?
                                    <GrayHeading>RUNDA {game.round}</GrayHeading> : <hr className={'m-0'}/>}
                                <MatchRow game={game}/>
                            </React.Fragment>
                        );
                    })}
                </div>
            </Container>
            <div className={'has-text-weight-medium mt-5'}>
                <button className={'button pagination-button'} onClick={()=>changePage(-1)} disabled={currentPage===1}>
                    <FontAwesomeIcon color={'var(--icon-color)'} size={'xs'} className={'mx-4'} icon={faLessThan}/>
                    Wstecz
                </button>
                <button className={'button pagination-button is-pulled-right'} onClick={()=>changePage(1)} disabled={currentPage===response?.pages}>
                    Dalej
                    <FontAwesomeIcon color={'var(--icon-color)'} size={'xs'} className={'mx-4'} icon={faGreaterThan}/>
                </button>
            </div>
        </OutsideContainer>
    </>);
}

export default Home;