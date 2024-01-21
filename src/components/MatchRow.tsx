import {Game} from "../types.ts";
import TeamLogotype from "./TeamLogotype.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTv} from '@fortawesome/free-solid-svg-icons';
import {faCircleRight} from "@fortawesome/free-regular-svg-icons";
function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}
const MISSING_SCORE_VALUE = null, MISSING_SCORE_SYMBOL = '-';
function MatchRow ({game}: {game:Game}) {
    return (
        <div className={'level is-mobile m-4'}>
            <div className={'level-left'}>
                <div className={'level-item has-text-grey has-text-weight-normal mr-5'}>{formatDate(game._date_object)}</div>
                <div className={'level-item is-block'} style={{borderLeft: '2px solid #61aee4'}}>
                    <TeamLogotype team={game.home_team_object}/>
                    <TeamLogotype team={game.away_team_object}/>
                </div>

            </div>
            <div className={'level-right'}>
                <div className={'level-item is-block has-text-weight-medium has-text-grey mr-6'}>
                    <div>{game.home_score === MISSING_SCORE_VALUE ? MISSING_SCORE_SYMBOL : game.home_score}</div>
                    <div>{game.away_score === MISSING_SCORE_VALUE ? MISSING_SCORE_SYMBOL : game.away_score}</div>
                </div>
                <button className={'level-item button match-button'}><FontAwesomeIcon size='sm' style={{color: '#899daf'}} icon={faTv}/></button>
                <button className={'level-item button match-button'}>Szczegóły <FontAwesomeIcon className={'ml-2'} style={{color: 'var(--icon-color)'}} size='sm' icon={faCircleRight}/></button>
            </div>
        </div>
    );
}

export default MatchRow;
