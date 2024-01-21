import FlagIcon from "./FlagIcon.tsx";
import {NavLink, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleRight} from "@fortawesome/free-regular-svg-icons";

function Header() {
    const isHome = useLocation().pathname === '/';
    return (<>
        <div className={`is-flex is-align-items-center mr-0 ${isHome ? 'my-1' : 'pt-2 mb-2'}`}>
            <FlagIcon countryCode='gb-eng'/>
            <span className='has-text-weight-semibold is-size-4'>Anglia: Premier League</span>
            <NavLink to={isHome ? '/table' : '/'} className={'button is-white has-text-weight-medium'}
                     style={{marginLeft: 'auto'}}>
                {isHome ? 'Tabela' : 'Mecze'} <FontAwesomeIcon
                className={'ml-2'} style={{color: 'var(--icon-color)'}} size='sm' icon={faCircleRight}/>
            </NavLink>
        </div>
        <hr className={'m-0'}/>
    </>);
}

export default Header;