import {useEffect, useState} from "react";
import {Rank, TableResponse} from "../types.ts";
import {getTable} from "../api.ts";
import TeamLogotype from "../components/TeamLogotype.tsx";
import GrayHeading from "../components/GrayHeading.tsx";
import './Table.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGreaterThan} from "@fortawesome/free-solid-svg-icons";
import OutsideContainer from "../components/OutsideContainer.tsx";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";

const getRankColor = (rankNumber: number): string => {
    return rankNumber <= 4 ? '#1c336c' : (rankNumber == 5 ? '#c82d2d' : (rankNumber == 6 ? '#a7a7a7' : '#ff5f5f'));
}

function TableHeader() {
    return <GrayHeading>
        <div className={'columns is-mobile is-gapless'} style={{width: '100%'}}>
            <div className={'column is-5 columns is-mobile'}>
                <div className={'column is-3'}>LP.</div>
                <div className={'column is-9'}>DRUŻYNA</div>
            </div>
            <div className={'column is-7 columns is-mobile has-text-centered'}>
                <div className={'column'}>M</div>
                <div className={'column'}>B</div>
                <div className={'column'}>RB</div>
                <div className={'column'}>P</div>
            </div>
        </div>
    </GrayHeading>
}

function TableRow(rank: Rank, index: number) {
    return (
        <div key={rank.team.id} className={'columns is-mobile is-gapless px-2 mb-0'}
             style={{width: '100%', borderBottom: '1px solid #d5e0e8'}}>
            <div className={'column is-5 columns is-mobile'}>
                <div className={'column is-3'}>
                    <div className={'rank-number'}
                         style={{backgroundColor: getRankColor(index + 1)}}>{index + 1}</div>
                </div>
                <div className={'column is-9'}>
                    <TeamLogotype team={rank.team} biggerImage={true}/>
                </div>
            </div>
            <div
                className={'column is-7 columns has-text-centered has-text-weight-semibold is-mobile'}>
                <div className={'column'}>{rank.games}</div>
                <div className={'column'}>{rank.goals_scored}:{rank.goals_conceded}</div>
                <div className={'column'}>{rank.goals_ratio}</div>
                <div className={'column has-text-weight-bold'}>{rank.points}</div>
            </div>

        </div>
    );
}

function TableLegend() {
    return <div className={'is-size-7 py-3'} style={{}}>
        <div className={'is-flex is-align-items-center'}>
            <div className={'rank-number mx-2 my-1'}
                 style={{backgroundColor: getRankColor(1)}}></div>
            Awans - Liga Mistrzów (Runda grupowa)
        </div>
        <div className={'is-flex is-align-items-center'}>
            <div className={'rank-number mx-2 my-1'}
                 style={{backgroundColor: getRankColor(5)}}></div>
            Awans - Liga Europy (Runda grupowa)
        </div>
        <div className={'is-flex is-align-items-center'}>
            <div className={'rank-number mx-2 my-1'}
                 style={{backgroundColor: getRankColor(8)}}></div>
            Spadek - Championship
        </div>
    </div>;
}

function Table() {

    const [ranks, setRanks] = useState<Rank[]>([]);

    useEffect(() => {
        getTable()
            .then((data: TableResponse) => {
                setRanks(data.slice(0, 8));
            });
    }, []);

    return <>
        <div className={'py-2 px-6 has-text-weight-medium'} style={{backgroundColor: '#eeeff2', width: '100%'}}>
            <span style={{color: '#000000'}}>
                Piłka nożna
                <FontAwesomeIcon size={'xs'} className={'mx-4'} icon={faGreaterThan}/>
            </span>
            <span style={{color: '#8591af'}}>Tabela</span>
        </div>
        <OutsideContainer>
            <div>
                <Container>
                    <Header/>
                    <div>
                        <TableHeader/>
                        {ranks.map((rank, index) => TableRow(rank, index))}
                        <TableLegend/>
                    </div>
                </Container>
            </div>
        </OutsideContainer>
    </>;
}

export default Table;