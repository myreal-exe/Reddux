import './NavBar.css';
import redditLogo from '../../media/Reddit-logo.png';

import { Link ,Switch} from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

export function NavBar(){
    return(
        <div className="NavBar">
            <img className="logo" src={redditLogo} alt="no" width="150px"/>
            
        </div>
    )
}