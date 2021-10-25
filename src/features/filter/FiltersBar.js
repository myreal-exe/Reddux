import { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectFilter,setFilter } from './filterSlice';

import './FiltersBar.css';



export function FiltersBar(){

    const dispatch = useDispatch();


    const handleFilterSelect = ({target}) => {
        dispatch(setFilter(target.value));
    }
    
   
    
    return(
        <div className="FiltersBar">
            <ul>
            <li>
                <input class="hidden" type='radio' value='hot' name='radio' id='radio1' onChange={handleFilterSelect}/>
                <label for='radio1'>HOT</label>
            </li>
            <li>
                <input class="hidden" type='radio' value='new' name='radio'  id='radio2' onChange={handleFilterSelect}/>
                <label for='radio2'>NEW</label>
            </li>
            <li>
                <input class="hidden" type='radio' value='best' name='radio'  id='radio3' onChange={handleFilterSelect}/>
                <label for='radio3'>BEST</label>
            </li>
        </ul>
        </div>
    )
}

