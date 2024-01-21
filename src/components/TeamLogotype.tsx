import {Team} from "../types.ts";

function TeamLogotype ( {team, biggerImage = false} : {team:Team, biggerImage?:boolean}) {
    return (
        <div className={'is-flex is-align-items-center has-text-weight-medium ml-2'}>
            <img src={team.image} alt={team.name} className={'mr-3 '} style={{width:(biggerImage?'1.5':'1')+'rem'}}/>
            {team.name}
        </div>
    );
}

export default TeamLogotype;
