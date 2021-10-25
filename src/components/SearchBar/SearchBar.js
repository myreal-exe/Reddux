import { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectSearchTerm,setSearchTerm } from '../../features/searchTerm/searchTermSlice';

import './SearchBar.css';



export function SearchBar(){

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm)

    let inputFieldSize=searchTerm.length;

    const handleSearchTermChange = ({target}) => {
        dispatch(setSearchTerm(target.value));
    }
    
    if(searchTerm.length){
        inputFieldSize= searchTerm.length
    } else {
        inputFieldSize=1;
    }

    return(
        <div className="SearchBar">
            <h2 style={{display:"inline-block"}}>r/</h2>
            <input type="text" size={inputFieldSize} value={searchTerm} onChange={handleSearchTermChange}/>
        </div>
    )
}

